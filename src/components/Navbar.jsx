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
          onClick={() => window.location.reload()} // reloads to homepage
        />
        <h2 style={{ margin: 0, fontWeight: "bold", fontSize: "1.5rem" }}>
          Reddit
        </h2>
      </div>
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
                padding: "5px 10px",
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

