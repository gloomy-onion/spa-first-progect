import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../state/updates-reducer';
import Updates from './Updates';
import props from '../../state/store';

const addPost = () => {
    props.dispatch(addPostActionCreator());
};

const onPostChange = (text) => {
    const action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
    return (<Updates updateNewPostText={onPostChange} addPost={addPost} posts={props.postsData}/>);
};
export default MyPostsContainer;
