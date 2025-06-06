import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
  { title: "Services", link: "/services" },
  { title: "Booking", link: "/bookings" },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between py-8 gap-8">
          {/* Left Section - Company Info */}
          <div className="flex-1 max-w-md">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-primary mb-2">UrbanEase</h1>
              <p className="text-lg">
                Your trusted partner for all home services. Quality professionals at your doorstep.
              </p>
            </div>
            
            <div className="space-y-3 text-lg mb-6">
              <div className="flex items-center gap-3">
                <FaLocationArrow className="text-primary text-xl" />
                <span>Srinagar, J&K</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt className="text-primary text-xl" />
                <span>+91 134567890</span>
              </div>
            </div>

            <div className="flex gap-5">
              <a href="#" className="hover:text-primary transition-colors">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Right Section - Links */}
          <div className="flex-1 max-w-xl">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-4">Quick Links</h3>
                <ul className="space-y-3 text-lg">
                  {FooterLinks.slice(0, 3).map((link) => (
                    <li key={link.title}>
                      <a href={link.link} className="hover:text-primary transition-colors">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4">Services</h3>
                <ul className="space-y-3 text-lg">
                  {FooterLinks.slice(3).map((link) => (
                    <li key={link.title}>
                      <a href={link.link} className="hover:text-primary transition-colors">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4">Support</h3>
                <ul className="space-y-3 text-lg">
                  <li>
                    <a href="/contact" className="hover:text-primary transition-colors">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/faq" className="hover:text-primary transition-colors">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="/privacy" className="hover:text-primary transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 py-6 text-center text-lg">
          © {new Date().getFullYear()} UrbanEase. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;