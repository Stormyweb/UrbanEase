// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/registration/Login.jsx";
import Signup from "./pages/registration/Signup.jsx";
import AdminBookingsMain from "./pages/Admin/AdminBookingsMain.jsx";
import ProtectedRoute from "./components/routes/ProtectedRoute.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import ServicesMain from "./components/Services/servicesMain.jsx";
import BookingFormMain from "./components/Services/BookingFormMain.jsx"
import BookingsMain from "./components/Services/BookingsMain.jsx";
import AboutPage from "./components/About/AboutPage.jsx";


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<ServicesMain />} />

          {/* Protected Routes */}
          <Route
            path="/admin"
            element={<ProtectedRoute allowedRole="admin"><AdminBookingsMain /></ProtectedRoute>}
          />
      
          
          <Route
            path="/bookingform"
            element={<ProtectedRoute allowedRole={["user", "admin"]}><BookingFormMain /></ProtectedRoute>}
          />
          <Route
            path="/bookings"
            element={<ProtectedRoute allowedRole={["user", "admin"]}><BookingsMain /></ProtectedRoute>}
          />
          <Route path="/AboutPage" element={<AboutPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
