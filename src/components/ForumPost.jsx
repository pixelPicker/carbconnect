import React, { useState } from "react";

const ForumPost = ({ post }) => {
  const [replies, setReplies] = useState(post.replies);
  const [newReply, setNewReply] = useState("");

  const handleReplySubmit = () => {
    if (newReply.trim()) {
      setReplies([...replies, newReply]);
      setNewReply("");
    }
  };

  return (
    <div className="forum-post">
      <h2 className="text-xl font-medium !pb-4">{post.title}</h2>
      <p>{post.content}</p>
      <div className="replies">
        {replies.map((reply, index) => (
          <div key={index} className="reply">
            {reply}
          </div>
        ))}
      </div>
      <textarea
        value={newReply}
        onChange={(e) => setNewReply(e.target.value)}
        placeholder="Write your reply..."
      />
      <button onClick={handleReplySubmit}>Reply</button>
    </div>
  );
};

export default ForumPost;
