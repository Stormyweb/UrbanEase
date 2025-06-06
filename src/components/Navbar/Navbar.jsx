import React, { useState, useEffect } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { auth } from "../../../FirebaseConfig.js";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../FirebaseConfig.js";
import { useNavigate } from "react-router-dom";

export const NavLinks = [
  {
    id: "1",
    name: "HOME",
    link: "/",
  },
  {
    id: 2,
    name: "SERVICES",
    link: "/services",
  },
  {
    id: 3,
    name: "ABOUT",
    link: "/AboutPage",
  },
  {
    id: 4,
    name: "BOOKING",
    link: "/bookings",
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setIsLoggedIn(!!user);
      if (user) {
        // Check if user is admin
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setIsAdmin(userDoc.data().role === "admin");
        }
      } else {
        setIsAdmin(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAdmin(false); // Reset admin status on logout
      navigate("/"); // Redirect to home after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    setShowMenu(false); // Close mobile menu if open
  };

  return (
    <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300 relative z-40">
      <div className="container py-3 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <h1 
              className="text-3xl font-bold font-serif cursor-pointer"
              onClick={() => navigate("/")}
            >
              Urban Ease
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {NavLinks.map((data) => (
                <li key={data.id} className="py-4">
                  <button
                    onClick={() => handleNavigation(data.link)}
                    className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium"
                  >
                    {data.name}
                  </button>
                </li>
              ))}
              {/* Add Admin link if user is admin */}
              {isAdmin && (
                <li className="py-4">
                  <button
                    onClick={() => handleNavigation("/admin")}
                    className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium"
                  >
                    ADMIN
                  </button>
                </li>
              )}
            </ul>
            
            {/* Login/Logout Button (Desktop) */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium"
              >
                LOGOUT
              </button>
            ) : (
              <button
                onClick={() => handleNavigation("/login")}
                className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium"
              >
                LOGIN
              </button>
            )}
            
            {/* Theme Toggle (Desktop) */}
            <div>
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl cursor-pointer"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl cursor-pointer"
                />
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Theme Toggle (Mobile) */}
            <div>
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl cursor-pointer"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl cursor-pointer"
                />
              )}
            </div>
            
            {/* Mobile Menu Toggle */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                size={30}
                className="cursor-pointer transition-all"
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                size={30}
                className="cursor-pointer transition-all"
              />
            )}
          </div>
        </div>
      </div>
      
      {/* Responsive Menu - Pass isAdmin prop and handleNavigation */}
      <ResponsiveMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        isLoggedIn={isLoggedIn}
        isAdmin={isAdmin}
        handleLogout={handleLogout}
        handleNavigation={handleNavigation}
      />
    </nav>
  );
};

export default Navbar;