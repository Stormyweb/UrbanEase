import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../../../FirebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import Layout from "../layout/Layout";

const timeSlots = [
  "9:00 AM - 11:00 AM",
  "11:00 AM - 1:00 PM",
  "1:00 PM - 3:00 PM",
  "3:00 PM - 5:00 PM",
  "5:00 PM - 7:00 PM",
];

const BookingFormMain = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    timeSlot: timeSlots[0],
    selectedService: "",
    customService: "",
    additionalDetails: ""
  });

  const isCustomService = state?.serviceName === "Request Any Other Services";
  const hasSubcategories = state?.subcategories?.length > 0;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      alert("You must be logged in to book a service.");
      return;
    }

    // Validate required fields
    if (!form.name || !form.phone || !form.address || 
        (!isCustomService && !form.selectedService) || 
        (isCustomService && !form.customService)) {
      alert("Please fill all required fields");
      return;
    }

    const bookingData = {
      ...form,
      userId: user.uid,
      email: user.email,
      service: state.serviceName,
      visitingCharge: state.visitingCharge || 0,
      timeSlot: isCustomService ? "To be decided" : form.timeSlot,
      timestamp: Timestamp.now(),
    };

    try {
      await addDoc(collection(db, "bookings"), bookingData);
      alert("Booking Confirmed!");
      navigate("/bookings");
    } catch (error) {
      console.error("Booking failed", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Layout>
      <div className="max-w-xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Booking: {state?.serviceName || "Service"}
        </h2>
        {state?.visitingCharge && (
          <p className="text-center mb-4">
            Visiting Charges: ₹{state.visitingCharge}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Full Name*</label>
            <input
              name="name"
              required
              placeholder="Enter your full name"
              className="w-full p-2 border rounded"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1">Phone Number*</label>
            <input
              name="phone"
              required
              placeholder="Enter your phone number"
              className="w-full p-2 border rounded"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1">Address*</label>
            <textarea
              name="address"
              required
              placeholder="Enter your complete address"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              rows="3"
            />
          </div>

          {hasSubcategories && !isCustomService && (
            <div>
              <label className="block mb-1">Select Service*</label>
              <select
                name="selectedService"
                className="w-full p-2 border rounded"
                value={form.selectedService}
                onChange={handleChange}
                required
              >
                <option value="">-- Select a service --</option>
                {state.subcategories.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          )}

          {isCustomService && (
            <div>
              <label className="block mb-1">Service Description*</label>
              <input
                name="customService"
                required
                placeholder="Describe your service requirement"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
            </div>
          )}

          {!isCustomService && (
            <div>
              <label className="block mb-1">Preferred Time Slot*</label>
              <select
                name="timeSlot"
                className="w-full p-2 border rounded"
                value={form.timeSlot}
                onChange={handleChange}
                required
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block mb-1">Additional Details (Optional)</label>
            <textarea
              name="additionalDetails"
              placeholder="Any special instructions or details"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              rows="3"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default BookingFormMain;