import React from 'react';
import Post from './Post/Post';
import styles from './Updates.module.css';
import cn from 'classnames';
const Updates = () => {
  return (
    <div className={cn(styles.posts)}>
      <h3>Our Thoughts and Updates</h3>
      <textarea></textarea>
      <button>Post</button>
      <button>Remove</button>
      <div className={styles.posts}>
        <Post message='Hi' likesCount={30} />
        <Post message='bye' likesCount={3} />
      </div>
    </div>
  );
};
export default Updates;
