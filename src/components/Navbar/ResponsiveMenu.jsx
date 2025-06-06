import React, { useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLinks } from "./Navbar";
import { useNavigate } from "react-router-dom";

const ResponsiveMenu = ({ showMenu, setShowMenu, isLoggedIn, isAdmin, handleLogout }) => {
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu, setShowMenu]);

  const handleNavigation = (path) => {
    navigate(path);
    setShowMenu(false);
  };

  return (
    <div
      ref={menuRef}
      className={`${showMenu ? "left-0" : "-left-full"
        } fixed top-0 z-50 bg-white h-screen w-[75%] md:hidden rounded-r-xl shadow-md flex flex-col justify-between px-8 pb-6 pt-16 transition-all duration-300`}
    >
      <div className="card">
        {/* User Profile Section */}
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} className="text-gray-600" />
          <div>
            <h1 className="font-medium">Hello User</h1>
            <h1 className="text-sm text-primary">
              {isAdmin ? "Admin User" : "Premium user"}
            </h1>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mt-12">
          <ul className="space-y-6 text-lg">
            {NavLinks.map((data) => (
              <li key={data.id}>
                <button
                  onClick={() => handleNavigation(data.link)}
                  className="block py-2 hover:text-primary transition-colors duration-300 w-full text-left"
                >
                  {data.name}
                </button>
              </li>
            ))}
            
            {/* Admin Link - Only show if user is admin */}
            {isAdmin && (
              <li>
                <button
                  onClick={() => handleNavigation("/admin")}
                  className="block py-2 hover:text-primary transition-colors duration-300 w-full text-left"
                >
                  ADMIN
                </button>
              </li>
            )}

            {/* Login/Logout Link */}
            <li>
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setShowMenu(false);
                  }}
                  className="block py-2 hover:text-primary transition-colors duration-300 w-full text-left"
                >
                  LOGOUT
                </button>
              ) : (
                <button
                  onClick={() => handleNavigation("/login")}
                  className="block py-2 hover:text-primary transition-colors duration-300 w-full text-left"
                >
                  LOGIN
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <div className="text-center text-sm">
        <p>
          Made with ❤ by{" StormyWeb "}
          <button 
            onClick={() => handleNavigation("#")}
            className="text-primary hover:underline"
          >
            Urban Ease
          </button>
        </p>
      </div>
    </div>
  );
};

export default ResponsiveMenu;