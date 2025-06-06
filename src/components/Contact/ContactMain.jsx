import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="dark:bg-black dark:text-white py-14">
      <div className="container">
        {/* Hero Section */}
        <div data-aos="zoom-in" className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6 rounded-lg mb-12">
          <div className="col-span-2 space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Let's make your home service needs hassle-free
            </h1>
            <p className="text-gray-400">
              Reach out to us for reliable, professional, and on-time home services — from repairs and installations to cleaning and maintenance.
            </p>
          </div>
          <div className="grid place-items-center">
            <a
              href="#contact-form"
              className="inline-block font-semibold py-3 px-8 bg-primary text-white rounded-lg tracking-wider uppercase hover:bg-primary/80 duration-300 text-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Phone */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-primary mb-4">
              <FaPhone className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Available 24/7 for emergencies</p>
            <a href="tel:+911234567890" className="text-lg hover:text-primary transition-colors">
              +91 1234567890
            </a>
          </div>

          {/* Email */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-primary mb-4">
              <FaEnvelope className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">We respond within 24 hours</p>
            <a href="mailto:contact@urbanease.com" className="text-lg hover:text-primary transition-colors">
              contact@urbanease.com
            </a>
          </div>

          {/* Address */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-primary mb-4">
              <FaMapMarkerAlt className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Office</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Visit us during business hours</p>
            <address className="text-lg not-italic">
              123 Service Lane, Srinagar, J&K 190001
            </address>
          </div>

          {/* Hours */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-primary mb-4">
              <FaClock className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Working Hours</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Emergency services available 24/7</p>
            <ul className="text-lg space-y-1">
              <li>Mon-Fri: 8AM - 8PM</li>
              <li>Sat: 9AM - 6PM</li>
              <li>Sun: Emergency only</li>
            </ul>
          </div>
        </div>

        {/* Contact Form and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div id="contact-form" className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block mb-2 font-medium">Service Needed</label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a service</option>
                  <option value="electrician">Electrician</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="cleaning">Cleaning</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Describe your service needs..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
              >
                Send Message <FiSend />
              </button>
            </form>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            {/* Map */}
            <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                title="UrbanEase Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.853771326717!2d74.79731431555296!3d34.08398088060045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1850a8e8e1e3d%3A0x372e5e0a3a3a3a3a!2sSrinagar%2C%20Jammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* WhatsApp Contact */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-4xl text-green-500" />
                <div>
                  <h3 className="text-xl font-bold mb-1">WhatsApp Support</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">Get quick assistance via WhatsApp</p>
                  <a
                    href="https://wa.me/911234567890"
                    className="inline-block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Chat Now
                  </a>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold mb-2 text-red-600 dark:text-red-400">Emergency Service</h3>
              <p className="mb-3">For urgent home service needs outside business hours</p>
              <a href="tel:+911234567890" className="text-lg font-semibold text-red-600 dark:text-red-400 hover:underline">
                Call: +91 1234567890
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;