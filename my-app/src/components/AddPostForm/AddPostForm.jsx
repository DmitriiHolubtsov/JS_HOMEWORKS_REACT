import React, { useState } from 'react';
import { useAddPostMutation } from '../../services/postsApi';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [addPost, { isLoading, isError, error }] = useAddPostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && body) {
      try {
        await addPost({ title, body }).unwrap();
        setTitle('');
        setBody('');
      } catch (err) {
        console.error('Failed to save the post:', err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="body">Body:</label>
      <textarea
        id="body"
        name="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add Post'}
      </button>
      {isError && <p>Error: {error.message}</p>}
    </form>
  );
};

export default AddPostForm;