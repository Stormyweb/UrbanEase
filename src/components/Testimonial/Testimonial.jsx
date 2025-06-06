import React from "react";

const TestimonialsData = [
  {
    name: "Dilshad",
    image: "",
    description: "The electrician arrived on time and fixed everything perfectly. Great service!",
    aosDelay: "0",
  },
  {
    name: "Satya",
    image: "",
    description: "Booked a home cleaning service — very professional and efficient. Highly recommended!",
    aosDelay: "300",
  },
  {
    name: "Sabir",
    image: "",
    description: "I used their plumber service, and the issue was resolved within an hour. Excellent work!",
    aosDelay: "1000",
  },
];

const Testimonial = () => {
  return (
    <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
      <div className="container">
        {/* header */}
        <div className="space-y-4 pb-12">
          <p
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl font-serif"
          >
            What Our Clients Say About Us
          </p>
          <p data-aos="fade-up" className="text-center sm:px-44">
            Trusted by hundreds of happy customers — see what they have to say about our reliable and professional home services.
          </p>

        </div>
        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white">
          {TestimonialsData.map((data) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.name}
                className="card text-center group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg"
              >
                <div className="grid place-items-center">
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="h-20 w-20 rounded-full"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{data.description}</p>
                <p className="font-semibold text-center">{data.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
