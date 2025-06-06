import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { GiShield } from "react-icons/gi";
import { MdHandyman } from "react-icons/md";

const skillsData = [
  {
    name: "Affordable Pricing",
    icon: (
      <FaRupeeSign className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Get top-notch services at competitive prices with transparent pricing. No hidden charges, just quality work within your budget.",
    aosDelay: "0",
  },
  {
    name: "Verified Professionals",
    icon: (
      <GiShield className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "All our service providers are background-verified, skilled professionals with proper training and experience for your peace of mind.",
    aosDelay: "500",
  },
  {
    name: "Quick Service",
    icon: (
      <MdHandyman className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "Book in minutes and get same-day service in most cases. We value your time as much as you do with our prompt response system.",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <div className="py-14 dark:bg-black dark:text-white sm:min-h[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-semibold text-center font-serif sm:text-4xl">
            Why Choose Us
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={skill.aosDelay}
              className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary
              duration-300 text-white hover:text-black rounded-lg"
            >
              <div className="grid place-items-center">{skill.icon}</div>
              <h1>{skill.name}</h1>
              <p>{skill.description}</p>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;