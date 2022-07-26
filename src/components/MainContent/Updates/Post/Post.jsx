import React from 'react';
import s from './Post.module.css';
import firstCatImg from './../../../../pictures/hall.jpeg';
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={firstCatImg} alt='hall' className={s.img} />
      {props.message}
      <div>
        <span>like </span> {props.likesCount}
      </div>
    </div>
  );
};
export default Post;
