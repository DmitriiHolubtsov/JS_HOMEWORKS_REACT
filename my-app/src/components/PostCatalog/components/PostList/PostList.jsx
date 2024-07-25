import React from 'react';
import Post from '../Post/Post';
import styles from './PostList.module.css';

function PostList({ posts }) {
  return (
    <div className={styles.posts}>
      <ul className={styles.posts__list}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}

export default PostList;
