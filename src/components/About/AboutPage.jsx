import React from "react";
import Layout from "../layout/Layout";
import { FaTools, FaUsers, FaHandshake, FaHome } from "react-icons/fa";

const AboutPage = () => {
  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About UrbanEase
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Making home maintenance simple, reliable, and hassle-free
          </p>
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  UrbanEase was founded in 2022 with a simple mission: to transform the way homeowners access and experience home services. 
                </p>
                <p>
                  Frustrated by the inconsistency and unreliability of traditional service providers, our founders set out to create a platform that connects homeowners with trusted, vetted professionals.
                </p>
                <p>
                  Today, we serve thousands of happy customers across Srinagar, delivering stress-free home maintenance solutions with just a few clicks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md text-center">
              <div className="flex justify-center mb-4">
                <FaTools className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Quality Work</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We guarantee professional-grade service from our rigorously vetted technicians.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md text-center">
              <div className="flex justify-center mb-4">
                <FaUsers className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Customer First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your satisfaction is our top priority with 24/7 support and service guarantees.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md text-center">
              <div className="flex justify-center mb-4">
                <FaHandshake className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Trust & Transparency</h3>
              <p className="text-gray-600 dark:text-gray-300">
                No hidden fees, upfront pricing, and verified service providers.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md text-center">
              <div className="flex justify-center mb-4">
                <FaHome className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Home Pride</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We help you maintain your home's comfort, safety, and value.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Team
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  UrbanEase is powered by a passionate team of home service experts, technologists, and customer experience professionals.
                </p>
                <p>
                  From our skilled technicians to our support staff, every team member shares our commitment to excellence and customer satisfaction.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;