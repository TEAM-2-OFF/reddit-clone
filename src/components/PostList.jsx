import React, { useState, useEffect } from "react";
import Post from "./Post";
import axios from "axios";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://www.reddit.com/r/reactjs.json").then((res) => {
      const data = res.data.data.children.map((p) => p.data);
      setPosts(data);
    });
  }, []);

  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
