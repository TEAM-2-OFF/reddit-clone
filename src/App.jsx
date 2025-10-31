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
  


  return (
    <div style={{ background: "#dae0e6", minHeight: "100vh" }}>
      <Navbar user={user} />
      <Navbar user={user} onSearch={(q) => console.log("Search query:", q)} />
      {user ? <Feed /> : <Login />}
    </div>
  );
}

export default App;
