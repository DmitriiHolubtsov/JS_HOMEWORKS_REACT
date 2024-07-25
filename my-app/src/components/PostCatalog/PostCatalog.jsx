import React from 'react';
import axios from 'axios';
import PostList from './components/PostList/PostList';

class PostCatalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      error: null
    };
  }

  async componentDidMount() {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      this.setState({ posts: res.data, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  }

  render() {
    const { posts, loading, error } = this.state;

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
  }
}

export default PostCatalog;
