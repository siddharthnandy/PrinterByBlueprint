import React, { useState } from 'react';
import PostsDisplay from './PostsDisplay';
import CreatePost from './CreatePost';
import './App.css';

const App = function () {
  const [newPostPublished, setNewPostPublished] = useState(false);

  return (
    <>
      <h1>PRINTER</h1>
      <h2>Create Post</h2>
      <CreatePost setNewPostPublished={setNewPostPublished} />
      <h2>Past Posts</h2>
      <PostsDisplay newPostPublished={newPostPublished} setNewPostPublished={setNewPostPublished} />
    </>
  );
};

export default App;
