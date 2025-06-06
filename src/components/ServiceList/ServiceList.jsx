import React from "react";
import { useNavigate } from "react-router-dom";
import electrician from "../../assets/electrician.jpg";
import plumber from "../../assets/plumber.jpg";
import HomeCleaning from "../../assets/HomeCleaning.jpg";

const ServiceListData = [
  {
    name: "Electrician",
    price: 199,
    image: electrician,
    aosDelay: "0",
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
    name: "Plumber",
    price: 249,
    image: plumber,
    aosDelay: "500",
    visitingCharge: 50,
    subcategories: [
      "Tap Repair",
      "Pipe Leakage",
      "Bathroom Fitting",
      "Water Tank Cleaning"
    ]
  },
  {
    name: "Home Cleaning",
    price: 399,
    image: HomeCleaning,
    aosDelay: "1000",
    visitingCharge: 50,
    subcategories: [
      "Full Home Cleaning",
      "Kitchen Deep Cleaning",
      "Bathroom Cleaning"
    ]
  },
];

const ServiceList = () => {
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
    <div className="pb-24 pt-12 bg-white dark:bg-dark dark:text-white">
      <div className="container">
        {/* heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Popular Home Services
        </h1>
        <p data-aos="fade-up" className="text-sm pb-10">
          Explore our most-booked services — trusted professionals, on-time delivery, and affordable rates for every home need.
        </p>

        {/* Home services Listing cards */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {ServiceListData.map((data, index) => {
              return (
                <div
                  key={data.id ?? index}
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  className="relative space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl group overflow-hidden"
                  style={{
                    backgroundImage: `url(${data.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '250px',
                  }}
                >
                  {/* Dark overlay for better text visibility */}
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300"></div>

                  {/* Content container */}
                  <div className="relative z-10 h-full flex flex-col justify-center items-center">
                    <h1 className="text-yellow-300 text-center font-semibold text-xl drop-shadow-md">{data.name}</h1>
                    
                    {/* Centered Book Now button */}
                    <button
                      onClick={() => handleBooking(data)}
                      className="mt-4 bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform group-hover:scale-105 shadow-lg"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* end of car listing cards */}
        <div className="grid place-content-center mt-8">
         <button 
        onClick={() => navigate('/services')}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors duration-300"
      >
        More Services
      </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;