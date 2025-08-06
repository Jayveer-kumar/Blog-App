import React, { useState, useRef, useEffect } from "react";
import "./UserProfileDropdown.css";
import { FiLogOut, FiEdit } from "react-icons/fi";

export default function UserProfileDropdown({ user, onLogout }) { 
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="user-profile-container" ref={dropdownRef}>
      <div
        className="nav-user-profile-box"
        onClick={() => setOpen(!open)}
        style={{
          backgroundImage: `url(${user?.image || "/default-user.jpg"})`,
        }}
      ></div>

      {open && (
        <div className="profile-dropdown-card">
          <div className="profile-top">
            <img
              src={user?.image || "/default-user.jpg"}
              alt="profile"
              className="profile-img-large"
            />
            <h4>{user?.name}</h4>
            <p>{user?.email}</p>
          </div>

          <div className="profile-links">
            <button className="dropdown-link">
              <FiEdit />
              Edit Profile
            </button>
            <button className="dropdown-link" onClick={onLogout}>
              <FiLogOut />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
