import React, { useState, useRef, useEffect } from "react";
import "./UserProfileDropdown.css";
import { FiLogOut, FiEdit ,FiFileText, FiBookmark ,FiLock ,FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

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
            <Link className="dropdown-link-box" to="/profile">
            <button className="dropdown-link">
              <FiUser />
              My Profile
            </button>
            </Link>
            <Link className="dropdown-link-box" to="/profile/edit">
            <button className="dropdown-link">
              <FiEdit />
              Edit Profile
            </button>
            </Link>
            <Link className="dropdown-link-box" to="/posts">
            <button className="dropdown-link">
              <FiFileText />
              My Posts
            </button>
            </Link>
            <Link className="dropdown-link-box" to="/bookmarks">
            <button className="dropdown-link">
              <FiBookmark />
              Bookmarks
            </button>
            </Link>
            <Link className="dropdown-link-box" to="/privacy-settings">
            <button className="dropdown-link" >
              <FiLock />
              Privacy Settings
            </button>
            </Link>
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
