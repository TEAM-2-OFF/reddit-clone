import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = ({ user, onSearch }) => {
  const [query, setQuery] = useState("");

 
  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  // Handle search input typing
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) onSearch(value);
  };

  return (
    <nav
      style={{
        backgroundColor: "#FF4500",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        flexWrap: "wrap",
      }}
    >
     
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src="https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png"
          alt="Reddit Logo"
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          onClick={() => window.location.reload()}
        />
        <h2 style={{ margin: 0, fontWeight: "bold", fontSize: "1.5rem" }}>
          Reddit
        </h2>
      </div>

      <form
        onSubmit={handleSearch}
        style={{
          flex: "1 1 50%",
          display: "flex",
          justifyContent: "center",
          margin: "0 40px",
        }}
      >
        <input
          type="text"
          placeholder="Search Reddit..."
          value={query}
          onChange={handleChange}
          style={{
            width: "100%",
            maxWidth: "500px",
            padding: "10px 15px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            fontSize: "16px",
            margin: "5px 0",
          }}
        />
      </form>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {user && (
          <>
            <img
              src={user.photoURL}
              alt="Profile"
              width="35"
              height="35"
              style={{ borderRadius: "50%" }}
            />
            <span style={{ fontWeight: "500" }}>{user.displayName}</span>
            <button
              onClick={() => signOut(auth)}
              style={{
                background: "white",
                color: "#FF4500",
                border: "none",
                borderRadius: "6px",
                padding: "7px 12px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
