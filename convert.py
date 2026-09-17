from PIL import Image

img = Image.open('public/assets/logo.png').convert('RGBA')
data = img.getdata()

new_data = []
for item in data:
    r, g, b, a = item
    L = 0.299 * r + 0.587 * g + 0.114 * b
    if a == 0:
        new_data.append((255, 255, 255, 0))
    else:
        darkness = 255 - L
        alpha = int(min(255, max(0, darkness * 3)))
        new_data.append((255, 255, 255, alpha))

img.putdata(new_data)
img.save('public/assets/logo-white.png')
