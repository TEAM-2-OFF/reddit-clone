import React, { useEffect, useState } from "react";

const Feed = ({ searchQuery }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const fetchHackerNews = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
      );
      if (!response.ok) throw new Error("Failed to load posts");

      const storyIds = await response.json();
      const top50 = storyIds.slice(0, 50);

      const storyPromises = top50.map((id) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((r) =>
          r.json()
        )
      );

      const stories = await Promise.all(storyPromises);
      setPosts(stories);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch feed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHackerNews();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading feed...</p>;
  if (error) return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;

  
  const filteredPosts = posts.filter((post) =>
    post.title?.toLowerCase().includes(searchQuery?.toLowerCase() || "")
  );

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      {filteredPosts.length === 0 ? (
        <p style={{ textAlign: "center" }}>No posts found.</p>
      ) : (
        filteredPosts.map((post, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#fff",
              marginBottom: "15px",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{post.title}</h3>
            <p>
              👍 {post.score} | 💬 {post.descendants || 0} comments
            </p>
            {post.url && (
              <a
                href={post.url}
                target="_blank"
                rel="noreferrer"
                style={{ color: "blue" }}
              >
                Visit Link
              </a>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Feed;
