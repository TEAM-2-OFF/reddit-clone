import React from "react";

const Post = ({ post }) => {
  return (
    <div
      style={{
        background: "white",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        marginBottom: "15px",
      }}
    >
      <p style={{ fontSize: "14px", color: "gray" }}>{post.subreddit}</p>
      <h3 style={{ margin: "5px 0" }}>{post.title}</h3>

      {post.thumbnail && post.thumbnail.startsWith("http") && (
        <img
          src={post.thumbnail}
          alt="Post Thumbnail"
          style={{
            width: "100%",
            borderRadius: "6px",
            marginTop: "10px",
            objectFit: "cover",
          }}
        />
      )}

      <p style={{ fontSize: "13px", color: "#777", marginTop: "5px" }}>
        Posted by u/{post.author}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
          fontSize: "14px",
          color: "#555",
        }}
      >
        <span>⬆️ {post.ups} upvotes</span>
        <span>💬 {post.num_comments} comments</span>
        <a
          href={post.url}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#0079d3", textDecoration: "none" }}
        >
          View Post
        </a>
      </div>
    </div>
  );
};

export default Post;
