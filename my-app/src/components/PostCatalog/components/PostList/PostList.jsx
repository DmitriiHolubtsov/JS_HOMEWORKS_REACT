import React from 'react';
import Post from '../Post/Post';
import styles from './PostList.module.scss';

const PostList = ({ posts }) => (
  <div className={styles.posts}>
    <ul className={styles.posts_list}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  </div>
);

export default PostList;
