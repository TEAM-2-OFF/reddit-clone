// server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

// Proxy endpoint to fetch Reddit data
app.get("/api/reddit", async (req, res) => {
  try {
    const response = await fetch("https://www.reddit.com/r/popular/hot.json?limit=10");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching Reddit data:", error);
    res.status(500).json({ error: "Failed to fetch data from Reddit" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
