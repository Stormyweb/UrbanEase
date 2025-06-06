import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import electricianImg from "../../assets/electrician.jpg"
import plumber from "../../assets/plumber.jpg"
import carpenter from "../../assets/wood.jpg"
import cleaning from "../../assets/HomeCleaning.jpg"
import packers from "../../assets/moversAndPackers.jpg"
import pest from "../../assets/pestControl.jpg"
import homeTutor from "../../assets/HomeTutor.jpg"
import painter from "../../assets/painter.jpg"
import carWash from "../../assets/carwash.jpg"
import home from "../../assets/ToolsImage.jpg"


const services = [
  {
    id: 1,
    name: "Electrician",
    image: electricianImg,
    visitingCharge: 50,
    subcategories: [
      "Ceiling Fan Fitting",
      "Switch Installation",
      "Light Fixture Installation",
      "Wiring Repair",
      "MCB Replacement"
    ]
  },
  {
    id: 2,
    name: "Plumber",
    image: plumber,
    visitingCharge: 50,
    subcategories: [
      "Tap Repair",
      "Pipe Leakage",
      "Bathroom Fitting",
      "Water Tank Cleaning"
    ]
  },
  {
    id: 3,
    name: "Carpenter",
    image: carpenter,
    visitingCharge: 50,
    subcategories: [
      "Furniture Repair",
      "Door Installation",
      "Custom Furniture"
    ]
  },
  {
    id: 4,
    name: "Home Cleaning",
    image: cleaning,
    visitingCharge: 50,
    subcategories: [
      "Full Home Cleaning",
      "Kitchen Deep Cleaning",
      "Bathroom Cleaning"
    ]
  },
  {
    id: 5,
    name: "Packers and Movers",
    image: packers,
    visitingCharge: 50,
    subcategories: [
      "Local Shifting",
      "Intercity Shifting",
      "Packing Services"
    ]
  },
  {
    id: 6,
    name: "Pest Control",
    image: pest,
    visitingCharge: 50,
    subcategories: [
      "Cockroach Control",
      "Termite Control",
      "Rodent Control"
    ]
  },
  {
    id: 7,
    name: "Painter",
    image: painter,
    visitingCharge: 50,
    subcategories: [
      "Wall Painting",
      "Wood Polish",
      "Waterproofing"
    ]
  },
  {
    id: 8,
    name: "Home Tutor",
    image: homeTutor,
    visitingCharge: 50,
    subcategories: [
      "School Subjects",
      "Competitive Exams",
      "Language Classes"
    ]
  },
  {
    id: 9,
    name: "Home Car Wash",
    image: carWash,
    visitingCharge: 50,
    subcategories: [
      "Exterior Wash",
      "Interior Cleaning",
      "Full Detailing"
    ]
  },
  {
    id: 10,
    name: "Request Any Other Services",
    image: home,
    visitingCharge: 50,
    subcategories: []
  }
];

const ServicesMain = () => {
  const navigate = useNavigate();

  const handleBooking = (service) => {
    navigate("/bookingform", { 
      state: { 
        serviceName: service.name,
        visitingCharge: service.visitingCharge,
        subcategories: service.subcategories 
      }
    });
  };

  return (
    <Layout>
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = "/images/default-service.jpg";
                }}
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    ₹{service.visitingCharge} visiting charge
                  </span>
                </div>
                
                {service.subcategories.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-1">Services include:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.subcategories.slice(0, 3).map((subcategory, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                          {subcategory}
                        </li>
                      ))}
                      {service.subcategories.length > 3 && (
                        <li className="text-blue-600 text-sm">
                          +{service.subcategories.length - 3} more services
                        </li>
                      )}
                    </ul>
                  </div>
                )}
                
                <button
                  onClick={() => handleBooking(service)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ServicesMain;