import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../state/updates-reducer';
import Updates from './Updates';
import props from '../../state/store';

const addPost = () => {
    props.store.dispatch(addPostActionCreator());
};

const onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
    return (<Updates updateNewPostText={onPostChange} addPost={addPost} posts={props.postsData}/>);
};
export default MyPostsContainer;
