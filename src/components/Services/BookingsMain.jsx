import React, { useEffect, useState } from "react";
import { db } from "../../../FirebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Layout from "../layout/Layout";

const BookingsMain = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user) return;

      try {
        const bookingsRef = collection(db, "bookings");
        const q = query(
          bookingsRef,
          where("userId", "==", user.uid),
          orderBy("timestamp", "desc")
        );

        try {
          const querySnapshot = await getDocs(q);
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setBookings(data);
        } catch (indexErr) {
          if (indexErr.message.includes("The query requires an index")) {
            console.warn("Missing index. Using fallback without ordering.");
            const fallbackQuery = query(bookingsRef, where("userId", "==", user.uid));
            const snapshot = await getDocs(fallbackQuery);
            const data = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setBookings(data);
          } else {
            throw indexErr;
          }
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user]);

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            My Bookings
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            View and manage your service appointments
          </p>
        </div>

        {bookings.length === 0 ? (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No bookings yet</h3>
            <p className="mt-1 text-gray-500">Your upcoming appointments will appear here</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {booking.service}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {booking.timestamp?.toDate().toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-4">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Customer Name</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {booking.name || "Not specified"}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Phone</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {booking.phone || "Not specified"}
                        </dd>
                      </div>
                      {booking.selectedService && (
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Service Type</dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {booking.selectedService}
                          </dd>
                        </div>
                      )}
                      {booking.customService && (
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Custom Request</dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {booking.customService}
                          </dd>
                        </div>
                      )}
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Time Slot</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {booking.timeSlot || "To be decided"}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Address</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {booking.address || "Not specified"}
                        </dd>
                      </div>
                      {booking.additionalDetails && (
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Additional Details</dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {booking.additionalDetails}
                          </dd>
                        </div>
                      )}
                      {booking.visitingCharge && (
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Visiting Charge</dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            ₹{booking.visitingCharge}
                          </dd>
                        </div>
                      )}
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Status</dt>
                        <dd className="mt-1 text-sm">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            {booking.status || "Pending"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BookingsMain;
