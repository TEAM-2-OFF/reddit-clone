import React from "react";
import PostList from "../components/PostList";

export default function Home() {
  return (
    <div className="home">
      <h2>Trending Posts</h2>
      <PostList />
    </div>
  );
}
