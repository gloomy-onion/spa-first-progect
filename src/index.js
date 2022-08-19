import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {addPost, subscribe, updateNewPostText} from './components/redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
        />
    );
};
rerenderEntireTree(state);

reportWebVitals();
subscribe(rerenderEntireTree);