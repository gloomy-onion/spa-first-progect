import React from 'react';
import Post from './Post/Post';
import styles from './Updates.module.css';
import cn from 'classnames';

const Updates = (props) => {
    const {dispatch, newPostText, postsData} = props;
    let newPostElement = React.createRef();
    const addPost = () => {
        dispatch({type: 'ADD-POST'});
    };

    const onPostChange = () => {
        let text = newPostElement.current.value;
        dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    };
    return (<div className={cn(styles.posts)}>
        <h3>Our Thoughts and Updates</h3>
        <textarea ref={newPostElement} value={newPostText} onChange={onPostChange}/>
        <button onClick={addPost}>Post</button>
        <button>Remove</button>
        <div className={styles.posts}>
            {postsData.map((data) => {
                return (<Post message={data.message} id={data.id} likesCount={data.likesCount}/>);
            })}
        </div>
    </div>);
};
export default Updates;
