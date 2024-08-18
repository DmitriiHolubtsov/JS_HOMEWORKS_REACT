import React, { useState } from 'react';
import { useEditPostMutation } from '../../services/postsApi';

const EditPostForm = ({ post }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [editPost, { isLoading, isError, error }] = useEditPostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && body) {
      await editPost({ id: post.id, title, body });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label htmlFor="body">Body:</label>
      <textarea
        id="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Updating...' : 'Update Post'}
      </button>
      {isError && <p>Error: {error.message}</p>}
    </form>
  );
};

export default EditPostForm;
