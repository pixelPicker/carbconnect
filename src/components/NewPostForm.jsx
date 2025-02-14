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
<<<<<<< HEAD
    <div className="new-post-form !mt-4">
      <h2>Create a new post</h2>
=======
    <div className="new-post-form">
      <h2 className="text-xl">Create a new post</h2>
>>>>>>> 1d87b8b0ca3edfa361e99e0ed5e458b127e63f08
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
  );
};

export default NewPostForm;
