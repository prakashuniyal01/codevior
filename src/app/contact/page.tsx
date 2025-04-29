'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-xl max-w-3xl mx-auto"
          >
            Get in touch with us to discuss your project or schedule a consultation
          </motion.p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="app-development">App Development</option>
                    <option value="web-development">Web Development</option>
                    <option value="web-design">Web Design</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="llm-solutions">LLM Solutions</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <a 
                        href="https://www.google.com/maps/search/?api=1&query=Kashipur+Uttarakhand+India" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer"
                      >
                        Kashipur, Uttarakhand, India
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-purple-600 mr-3" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <a 
                        href="tel:+918979049772" 
                        className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer"
                      >
                        +91 8979049772
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-purple-600 mr-3" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a 
                        href="mailto:support@codevior.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer"
                      >
                        support@codevior.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span className="font-semibold">Monday - Friday:</span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Saturday:</span>
                    <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Sunday:</span>
                    <span className="text-gray-600">Closed</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
