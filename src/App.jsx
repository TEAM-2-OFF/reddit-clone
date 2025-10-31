import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Handle search
  const handleSearch = (query) => {
    console.log("Search query:", query);
    // You can pass this query to Feed or trigger an API call
  };

  return (
    <div style={{ background: "#dae0e6", minHeight: "100vh" }}>
      <Navbar user={user} onSearch={handleSearch} />
      {user ? <Feed /> : <Login />}
    </div>
  );
}

export default App;
