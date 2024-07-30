import React from 'react';
import styles from './Post.module.scss';

const Post = ({ post }) => (
  <li className={styles.posts__single_post} data-post-id={post.id}>
    <h3 className={styles.posts__post_title}>{post.title}</h3>
    <p className={styles.posts__post_description}>{post.body}</p>
  </li>
);

export default Post;
