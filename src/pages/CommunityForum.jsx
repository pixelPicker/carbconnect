import React, { useState } from "react";
import ForumList from "../components/ForumList";
import NewPostForm from "../components/NewPostForm";
import '../App.css';

const CommunityForum = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "How can I reduce my carbon footprint?",
      content: "I'm looking for advice on reducing my carbon footprint.",
      replies: ["Try cycling more often!", "Consider switching to solar energy."]
    },
    {
      id: 2,
      title: "Carbon offsetting programs",
      content: "Are carbon offsetting programs worth it?",
      replies: ["I think it's a good idea if done correctly.", "You should research different offset programs."]
    }
  ]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="app bg-green-100">
      <header className="text-3xl font-bold text-center !py-4 !mt-16">Community Forum</header>
      <main className="main-content">
        <NewPostForm addPost={addPost} />
        <ForumList posts={posts} />
      </main>
    </div>
  );
};

export default CommunityForum;
