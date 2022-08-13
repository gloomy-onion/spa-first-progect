import React from 'react';
import Post from './Post/Post';
import styles from './Updates.module.css';
import cn from 'classnames';
import { postsData } from './Post/Post';
const Updates = () => {

  return (
    <div className={cn(styles.posts)}>
      <h3>Our Thoughts and Updates</h3>
      <textarea></textarea>
      <button>Post</button>
      <button>Remove</button>
      <div className={styles.posts}>
        {postsData.map((data) => {
          return (
            <Post
              message={data.message}
              id={data.id}
              likesCount={data.likesCount}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Updates;
