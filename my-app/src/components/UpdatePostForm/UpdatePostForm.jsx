import React, { useState } from 'react';
import { useUpdatePostMutation } from '../../services/postsApi';

const UpdatePostForm = ({ post }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [updatePost] = useUpdatePostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePost({ id: post.id, title, body });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} required />
      <button type="submit">Update Post</button>
    </form>
  );
};

export default UpdatePostForm;
