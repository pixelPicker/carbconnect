import React, { useState } from "react";

const NewPostForm = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content,
      replies: []
    };
    addPost(newPost);
    setTitle("");
    setContent("");
  };

  return (

    <div className="new-post-form">
      <h2 className="!pb-4 text-xl">Create a new post</h2>

    <div className="new-post-form">
      <h2 className="text-lg">Create a new post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your post..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Post</button>
      </form>
    </div>
    </div>
  );
};

export default NewPostForm;
