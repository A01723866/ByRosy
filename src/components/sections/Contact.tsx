import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ByRosyContact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    details: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@byrosy.com",
      link: "mailto:hello@byrosy.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "123 Design District, City, State 12345",
      link: "#"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      link: "#"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="pt-0 pb-20 bg-soft-cream -mt-1">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-charcoal mb-6">
            Start Your Kitchen Journey
          </h2>
          <p className="font-inter text-lg text-warm-gray max-w-2xl mx-auto">
            Ready to transform your kitchen? Contact us today for a personalized consultation 
            and discover how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="font-playfair text-2xl font-semibold text-deep-charcoal mb-8">
              Get In Touch
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gold-accent/20 p-3 rounded-lg">
                    <info.icon className="w-5 h-5 text-gold-accent" />
                  </div>
                  <div>
                    <h4 className="font-inter font-medium text-deep-charcoal mb-1">
                      {info.title}
                    </h4>
                    <a 
                      href={info.link}
                      className="font-inter text-warm-gray hover:text-gold-accent transition-colors"
                    >
                      {info.details}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-off-white p-6 rounded-lg">
              <h4 className="font-playfair text-xl font-semibold text-deep-charcoal mb-4">
                Why Choose Us?
              </h4>
              <ul className="space-y-2 font-inter text-warm-gray">
                <li>• Complimentary initial consultation</li>
                <li>• 3D design visualization</li>
                <li>• Premium material sourcing</li>
                <li>• Comprehensive warranty</li>
                <li>• White-glove installation service</li>
              </ul>
            </div>
          </div>

          <div className="bg-off-white p-8 rounded-lg shadow-lg">
            <h3 className="font-playfair text-2xl font-semibold text-deep-charcoal mb-6">
              Request Consultation
            </h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-inter text-sm font-medium text-deep-charcoal mb-2 block">
                    First Name
                  </label>
                  <input 
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-soft-cream border border-warm-gray/30 rounded-md focus:border-gold-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-inter text-sm font-medium text-deep-charcoal mb-2 block">
                    Last Name
                  </label>
                  <input 
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-soft-cream border border-warm-gray/30 rounded-md focus:border-gold-accent focus:outline-none"
                  />
                </div>
              </div>
              
              <div>
                <label className="font-inter text-sm font-medium text-deep-charcoal mb-2 block">
                  Email
                </label>
                <input 
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-soft-cream border border-warm-gray/30 rounded-md focus:border-gold-accent focus:outline-none"
                />
              </div>
              
              <div>
                <label className="font-inter text-sm font-medium text-deep-charcoal mb-2 block">
                  Phone
                </label>
                <input 
                  type="tel"
                  name="phone"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-soft-cream border border-warm-gray/30 rounded-md focus:border-gold-accent focus:outline-none"
                />
              </div>
              
              <div>
                <label className="font-inter text-sm font-medium text-deep-charcoal mb-2 block">
                  Project Details
                </label>
                <textarea 
                  name="details"
                  placeholder="Tell us about your dream kitchen..."
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-soft-cream border border-warm-gray/30 rounded-md focus:border-gold-accent focus:outline-none resize-none"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gold-accent hover:bg-gold-accent/90 text-deep-charcoal font-inter font-medium py-3 rounded-md transition-colors"
              >
                Schedule Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ByRosyContact; 