import React from "react";
import ForumPost from "./ForumPost";

const ForumList = ({ posts }) => {
  return (
    <div className="forum-list">
      {posts.length === 0 ? (
        <p>No posts available. Start the conversation!</p>
      ) : (
        posts.map((post) => (
          <ForumPost key={post.id} post={post} />
        ))
      )}
    </div>
  );
};

export default ForumList;
