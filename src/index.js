import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './components/redux/state';
import { addPost } from './components/redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => { root.render(
  <App
        state={ state }
        addPost={addPost}
  />
  );
};
rerenderEntireTree( state );

reportWebVitals();
subscribe( rerenderEntireTree );