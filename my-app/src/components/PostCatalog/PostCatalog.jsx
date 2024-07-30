import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostList from './components/PostList/PostList';
import 'bootstrap/dist/css/bootstrap.min.css';

const PostCatalog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
        setLoading(false);
      } catch (catchError) {
        setError(catchError.message);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return <PostList posts={posts} />;
};

export default PostCatalog;
