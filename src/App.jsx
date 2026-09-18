import React from 'react';
import { Phone, Mail, MapPin, CheckCircle2, ShieldCheck, Clock, FileText, Trash2, ArrowRight, InspectionPanel, Germ, BrushCleaning, Hammer } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Top Bar */}
      <div className="bg-brand-dark text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center"><Phone size={16} className="mr-2" /> (207) 838-6848</span>
            <span className="flex items-center"><Mail size={16} className="mr-2" /> abatementanddemo@gmail.com</span>
          </div>
          <div className="flex items-center text-gray-300">
            <MapPin size={16} className="mr-2" /> Serving Maine, NH, & VT
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img src="/assets/logo.png" alt="Abatement and Demolition Specialist" className="h-12 md:h-16" />
          </a>
          <div className="hidden md:flex space-x-8 font-semibold text-gray-700">
            <a href="#services" className="hover:text-brand-red transition">Services</a>
            <a href="#why-us" className="hover:text-brand-red transition">Why Us</a>
            <a href="#process" className="hover:text-brand-red transition">Process</a>
            <a href="#contact" className="hover:text-brand-red transition">Contact</a>
          </div>
          <a href="#contact" className="bg-brand-red text-white px-4 py-2 md:px-6 rounded-md font-bold hover:bg-red-700 transition whitespace-nowrap text-sm md:text-base">
            Free Assessment
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img src="/assets/image-4.png" alt="Abatement working" className="w-full h-full object-cover object-bottom" />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-white z-10 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Expert Abatement & Demolition Services
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Family-owned specialists in asbestos, mold, and lead removal. Safe, compliant, and experienced.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="bg-brand-red text-center text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-red-700 transition flex items-center justify-center">
                Get a Free Assessment <ArrowRight size={20} className="ml-2" />
              </a>
              <a href="tel:2078386848" className="bg-white text-center text-brand-dark px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition flex items-center justify-center">
                <Phone size={20} className="mr-2" /> (207) 838-6848
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We handle hazardous material removal and general demolition for residential and commercial properties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex">
              <div className="flex-shrink-0 self-start mr-4">
                <div className="bg-red-100 p-2.5 rounded-full text-brand-red">
                  <InspectionPanel size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Asbestos Abatement</h3>
                <p className="text-gray-600">Safe testing, containment, and complete removal of asbestos-containing materials following strict DEP guidelines.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex">
              <div className="flex-shrink-0 self-start mr-4">
                <div className="bg-red-100 p-2.5 rounded-full text-brand-red">
                  <Germ size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Mold Remediation</h3>
                <p className="text-gray-600">Thorough identification, treatment, and removal of mold to restore a healthy and safe indoor air environment.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex">
              <div className="flex-shrink-0 self-start mr-4">
                <div className="bg-red-100 p-2.5 rounded-full text-brand-red">
                  <BrushCleaning size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">RRP Lead Removal</h3>
                <p className="text-gray-600">Expert containment and elimination of lead-based paint hazards in older residential and commercial buildings.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex">
              <div className="flex-shrink-0 self-start mr-4">
                <div className="bg-red-100 p-2.5 rounded-full text-brand-red">
                  <Hammer size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">General Demolition</h3>
                <p className="text-gray-600">Safe, efficient, and complete tear-downs and interior gutting for properties preparing for renovation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="/assets/image-3-short.png" alt="Team at work" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Based in Augusta, ME, we are a family-owned business dedicated to keeping our communities safe. Our crew brings over 35 years of hands-on experience in the abatement industry.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="text-brand-red mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">35+ Years of Experience</h4>
                  <p className="text-gray-600">Decades of industry knowledge ensuring every job is done right.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-brand-red mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Fully Licensed & Insured</h4>
                  <p className="text-gray-600">DEP licenses for Contracting and Consulting (Lic. #CF-0259)</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-brand-red mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Residential & Commercial</h4>
                  <p className="text-gray-600">Equipped to handle jobs of all sizes, from homes to large facilities.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-brand-red mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Free Assessments</h4>
                  <p className="text-gray-600">We provide zero-obligation scopes and estimates before work begins.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From your first call to the final haul away, we handle everything transparently and professionally.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-brand-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p className="text-sm text-gray-300">Call, text, or fill out our online form to request a free assessment.</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-2">On-Site Assessment</h3>
              <p className="text-sm text-gray-300">We inspect the property, collect necessary samples, scope the work, and provide an estimate.</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-2">Permits & Scheduling</h3>
              <p className="text-sm text-gray-300">We handle all DEP notifications and schedule the work at your convenience.</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-2">Removal & Disposal</h3>
              <p className="text-sm text-gray-300">We safely abate all hazards and haul away all debris, leaving the site clean.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Request a Free Assessment</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to get started? Fill out the form below or contact us directly. We typically provide same day responses.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-brand-red text-white p-3 rounded-full mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Call / Text</p>
                  <a href="tel:2078386848" className="text-xl font-bold text-gray-900 hover:text-brand-red transition">(207) 838-6848</a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-brand-red text-white p-3 rounded-full mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Email</p>
                  <a href="mailto:abatementanddemo@gmail.com" className="text-xl font-bold text-gray-900 hover:text-brand-red transition">abatementanddemo@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-brand-red text-white p-3 rounded-full mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Location & Service Area</p>
                  <p className="text-lg font-bold text-gray-900">Based in Augusta, ME</p>
                  <p className="text-gray-600">Serving ME, NH, & VT</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <form action="https://formspree.io/f/mkjgnkwr" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-red focus:border-brand-red" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-red focus:border-brand-red" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-red focus:border-brand-red" />
                </div>
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Property Address</label>
                <input type="text" id="address" name="address" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-red focus:border-brand-red" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message / Scope of Work</label>
                <textarea id="message" name="message" rows="4" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-red focus:border-brand-red"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-red text-white font-bold py-3 px-4 rounded-md hover:bg-red-700 transition">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <img src="/assets/logo-white.png" alt="Abatement and Demolition Specialist" className="h-20 mx-auto mb-6" />
          <p className="mb-4">DEP Contractor Lic. #CF-0259 | Fully Licensed & Insured</p>
          <p className="mb-8">Serving Maine, New Hampshire, and Vermont border regions.</p>
          <div className="border-t border-gray-800 pt-8">
            <p>&copy; {new Date().getFullYear()} Abatement and Demolition Specialist LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
