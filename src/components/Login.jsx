import React from "react";
import { auth, provider, signInWithPopup } from "../firebase";

export default function Login() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User logged in:", user);
      alert(`Welcome, ${user.displayName}!`);
    } catch (error) {
      console.error("Error during sign-in:", error.message);
      alert("Login failed — please try again.");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png"
        alt="Reddit Logo"
        width="100"
        style={{ marginBottom: "20px" }}
      />
      <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#FF4500" }}>
        Login to Reddit Clone
      </h2>
      <button
        onClick={handleLogin}
        style={{
          backgroundColor: "#FF4500",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          transition: "0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#e03e00")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#FF4500")}
      >
        Sign in with Google
      </button>
    </div>
  );
}
