import React from 'react';
import styles from './Post.module.css';

function Post({ post }) {
  return (
    <li className={styles.posts_single_post} data-post-id={post.id}>
      <h3 className={styles.posts__post_title}>{post.title}</h3>
      <p className={styles.posts__post_description}>{post.body}</p>
    </li>
  );
}

export default Post;
