import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div style={{ background: "#dae0e6", minHeight: "100vh" }}>
      <Navbar user={user} onSearch={handleSearch} />
      {user ? <Feed searchQuery={searchQuery} /> : <Login />}
    </div>
  );
}

export default App;
