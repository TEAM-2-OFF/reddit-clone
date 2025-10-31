import React, { useState } from "react";
import { auth, provider, signInWithPopup } from "../firebase";

export default function Login() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
      console.log("User logged in:", user);
      alert(`Welcome, ${user.displayName}!`);
    } catch (error) {
      console.error("Error during sign-in:", error.message);
      alert("Login failed — check console for details.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {user ? (
        <>
          <h2>Welcome {user.displayName}</h2>
          <img src={user.photoURL} alt="Profile" width="100" />
          <p>{user.email}</p>
        </>
      ) : (
        <>
          <h2>Login to Reddit </h2>
          <button onClick={handleLogin}>Sign in with Google</button>
        </>
      )}
    </div>
  );
}
