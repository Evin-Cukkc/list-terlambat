// src/components/Sidebar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {!isOpen && (
        <button className="open-sidebar-btn" onClick={toggleSidebar}>
          &#x25CF;
        </button>
      )}

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <>
            <button className="close-sidebar-btn" onClick={toggleSidebar}>
              &times;
            </button>
            <ul>
              <li className={isActive("/") ? "active" : ""}>
                <Link to="/" onClick={closeSidebar}>Beranda</Link>
              </li>
              <li className={isActive("/profil") ? "active" : ""}>
                <Link to="/profil" onClick={closeSidebar}>Profil</Link>
              </li>
              <li className={isActive("/data-siswa") ? "active" : ""}>
                <Link to="/data-siswa" onClick={closeSidebar}>Data Siswa</Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Sidebar;
