import React from 'react';
import Post from './Post/Post';
import s from './Updates.module.css';
import cx from 'classnames';
const Updates = () => {
  return (
    <div className={cx(s.posts)}>
      <h3>Our Thoughts and Updates</h3>
      <textarea></textarea>
      <button>Post</button>
      <button>Remove</button>
      <div className={s.posts}>
        <Post message='Hi'/>
        <Post message='bye' />
      </div>
    </div>
  );
};
export default Updates;
