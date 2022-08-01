import React from 'react';
import s from './Post.module.css';
import firstCatImg from './../../../../pictures/hall.jpeg';
const Post = ( props ) => {
  const { message, likesCount } = props;
  return (
    <div className={s.item}>
      <img src={firstCatImg} alt='hall' className={s.img} />
      {message}
      <div>
        <span>like </span> {likesCount}
      </div>
    </div>
  );
};
export default Post;
