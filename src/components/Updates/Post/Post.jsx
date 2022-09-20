import React from 'react';
import styles from './Post.module.css';
import firstCatImg from '../../../assets/img/hall.jpeg';

const Post = (props) => {
    const {message, likesCount} = props;
    return (
        <>
            <img src={firstCatImg} alt="hall" className={styles.img}/>
            {message}
            <div>
                <span>likes: </span> {likesCount}
            </div>
        </>
    );
};
export default Post;