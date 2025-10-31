import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = ({ user }) => {
  return (
    <nav
      style={{
        backgroundColor: "#FF4500",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      <h2>Reddit Clone</h2>
      <form onSubmit={handleSearch} style={{ flex: 1, margin: "0 30px" }}>
        <input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "8px 12px",
            borderRadius: "6px",
            border: "none",
            outline: "none",
            fontSize: "15px",
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
              style={{ borderRadius: "50%" }}
            />
            <span>{user.displayName}</span>
            <button
              onClick={() => signOut(auth)}
              style={{
                background: "white",
                color: "#FF4500",
                border: "none",
                borderRadius: "6px",
                padding: "5px 10px",
                cursor: "pointer",
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

