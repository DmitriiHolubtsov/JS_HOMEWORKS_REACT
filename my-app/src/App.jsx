import {
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useLazyGetPostByIdQuery,
  useDeletePostMutation
} from './store/postsApi';
import { useState, useEffect } from 'react';

// Define default post data outside the component
const formDefaultState = {
  title: '',
  body: ''
};

function App() {
  const [numberOfPosts, setNumberOfPosts] = useState('');
  const { data = [], isLoading, refetch } = useGetPostsQuery(numberOfPosts);
  const [postData, setPostData] = useState({ ...formDefaultState });
  const [createPost, { isLoading: isCreating }] = useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();
  const [localPosts, setLocalPosts] = useState([]);
  const [editingPostId, setEditingPostId] = useState(null);

  // Update localPosts when data changes
  useEffect(() => {
    if (data.length !== localPosts.length) {
      setLocalPosts(data);
    }
  }, [data]);

  if (isLoading) return <h3>Loading ...</h3>;

  const updatePostData = ({ target }) => {
    setPostData((prevData) => ({
      ...prevData,
      [target.name]: target.value
    }));
  };

  const createPostHandler = async (e) => {
    e.preventDefault();
    try {
      if (editingPostId) {
        // Update existing post
        const updatedPost = await updatePost({ id: editingPostId, ...postData }).unwrap();
        setLocalPosts((prevPosts) =>
          prevPosts.map((post) => (post.id === editingPostId ? updatedPost : post))
        );
        setEditingPostId(null);
      } else {
        // Create a new post
        const createdPost = await createPost({ ...postData }).unwrap();
        setLocalPosts((prevPosts) => [...prevPosts, createdPost]);
      }
      setPostData({ ...formDefaultState });
      // Refresh the data
      refetch();
    } catch (error) {
      console.error('Failed to create/update post:', error);
    }
  };

  const changeNumberOfPosts = ({ target }) => setNumberOfPosts(target.value);

  const handleDeletePost = async (postId) => {
    // Optimistically update the UI
    setLocalPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));

    try {
      await deletePost(postId).unwrap();
    } catch (error) {
      console.error('Failed to delete the post:', error);
      // Revert to original posts if deletion fails
      refetch(); // Fetch the latest data from the server
    }
  };

  const handleEditPost = (post) => {
    setEditingPostId(post.id);
    setPostData({ title: post.title, body: post.body });
  };

  const handleRefresh = () => {
    refetch(); // Manually trigger a refetch of the posts
  };

  return (
    <div className="App">
      <h3>{editingPostId ? 'Edit Post' : 'Create Post'}</h3>

      <form onSubmit={createPostHandler}>
        <fieldset disabled={isCreating}>
          <p>
            <input
              type="text"
              name="title"
              placeholder="title"
              onChange={updatePostData}
              value={postData['title']}
            />
          </p>
          <p>
            <input
              type="text"
              name="body"
              placeholder="body"
              onChange={updatePostData}
              value={postData['body']}
            />
          </p>

          <button type="submit">{editingPostId ? 'Update Post' : 'Create Post'}</button>
        </fieldset>
      </form>

      <button onClick={handleRefresh}>Refresh Posts</button>

      <hr />
      <label>
        <span>Number of posts to show: |{numberOfPosts || 'all'}| :</span>
        <input type="number" onChange={changeNumberOfPosts} value={numberOfPosts} />
      </label>

      <ul>
        {localPosts.map((post) => (
          <li key={post.id}>
            <span onClick={() => handleEditPost(post)}>{post.title}</span>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
