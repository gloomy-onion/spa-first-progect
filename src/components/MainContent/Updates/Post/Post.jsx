import React from 'react';
import styles from './Post.module.css';
import firstCatImg from './../../../../img/hall.jpeg';
const Post = ( props ) => {
  const { message, likesCount } = props;
  return (
    <div className={styles.item}>
      <img src={firstCatImg} alt='hall' className={styles.img} />
      {message}
      <div>
        <span>like </span> {likesCount}
      </div>
    </div>
  );
};
export default Post;
