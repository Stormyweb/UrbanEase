import React, { useEffect, useState } from "react";
import { db } from "../../../FirebaseConfig";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  orderBy,
  query,
} from "firebase/firestore";
import Layout from "../../components/layout/Layout";

const AdminBookingsMain = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllBookings = async () => {
      try {
        const q = query(collection(db, "bookings"), orderBy("timestamp", "desc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBookings(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch admin bookings:", err);
      }
    };

    fetchAllBookings();
  }, []);

  const handleAssign = async (bookingId) => {
    const assignedTo = prompt("Enter name or team to assign this booking:");
    if (!assignedTo) return;

    try {
      const bookingRef = doc(db, "bookings", bookingId);
      await updateDoc(bookingRef, {
        assignedTo,
        status: "Assigned",
      });

      setBookings((prev) =>
        prev.map((b) =>
          b.id === bookingId ? { ...b, assignedTo, status: "Assigned" } : b
        )
      );
    } catch (err) {
      console.error("Error assigning booking:", err);
    }
  };

  const handleClose = async (bookingId) => {
    try {
      const bookingRef = doc(db, "bookings", bookingId);
      await updateDoc(bookingRef, {
        status: "Closed",
      });

      setBookings((prev) =>
        prev.map((b) =>
          b.id === bookingId ? { ...b, status: "Closed" } : b
        )
      );
    } catch (err) {
      console.error("Error closing booking:", err);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading bookings...</p>;

  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">All Service Bookings</h2>
        <div className="grid gap-5">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="border p-4 rounded-md bg-white dark:bg-gray-800"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xl font-bold">{booking.service}</h3>
                  <p><strong>Customer:</strong> {booking.name}</p>
                  <p><strong>Phone:</strong> {booking.phone}</p>
                  <p><strong>Email:</strong> {booking.email}</p>
                </div>
                <div>
                  <p><strong>Status:</strong> 
                    <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                      booking.status === "Closed" 
                        ? "bg-green-100 text-green-800" 
                        : booking.status === "Assigned" 
                        ? "bg-blue-100 text-blue-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {booking.status || "Pending"}
                    </span>
                  </p>
                  {booking.assignedTo && <p><strong>Assigned To:</strong> {booking.assignedTo}</p>}
                  <p><strong>Date:</strong> {booking.timestamp?.toDate().toLocaleDateString()}</p>
                </div>
              </div>

              <div className="mt-3 border-t pt-3">
                <p><strong>Address:</strong> {booking.address}</p>
                {booking.timeSlot && <p><strong>Time Slot:</strong> {booking.timeSlot}</p>}
                {booking.selectedService && <p><strong>Service Type:</strong> {booking.selectedService}</p>}
                {booking.customService && <p><strong>Custom Request:</strong> {booking.customService}</p>}
                {booking.additionalDetails && <p><strong>Details:</strong> {booking.additionalDetails}</p>}
                {booking.visitingCharge && <p><strong>Visiting Charge:</strong> ₹{booking.visitingCharge}</p>}
              </div>

              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => handleAssign(booking.id)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                >
                  {booking.status === "Assigned" ? "Reassign" : "Assign"}
                </button>

                {booking.status !== "Closed" && (
                  <button
                    onClick={() => handleClose(booking.id)}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
                  >
                    Close
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AdminBookingsMain;