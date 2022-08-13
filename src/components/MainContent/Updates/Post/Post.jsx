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
        <span>likes: </span> {likesCount}
      </div>
    </div>
  );
 };
 export const postsData = [
    { message: 'Hi', id: 1, likesCount: 20 },
    { message: 'bye', id: 2, likesCount: 0 },
    { message: 'bye', id: 2, likesCount: 88 },
  ];
export default Post;