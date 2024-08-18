import React from 'react';
import { useDeletePostMutation } from '../../services/postsApi';

const DeletePostButton = ({ postId, onPostDeleted }) => {
  const [deletePost, { isLoading }] = useDeletePostMutation();

  const handleDelete = async () => {
    try {
      await deletePost(postId).unwrap();
      onPostDeleted(); // Виклик функції для оновлення списку постів
    } catch (err) {
      console.error('Failed to delete the post:', err);
    }
  };

  return (
    <button type="button" onClick={handleDelete} disabled={isLoading}>
      {isLoading ? 'Deleting...' : 'Delete Post'}
    </button>
  );
};

export default DeletePostButton;