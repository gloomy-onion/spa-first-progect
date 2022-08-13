import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const postsData = [
  { message: 'Hi', id: 1, likesCount: 20 },
  { message: 'bye', id: 2, likesCount: 0 },
  { message: 'bye', id: 2, likesCount: 88 },
];

const dialogueInfo = [
  { userName: 'Color', id: '1' },
  { userName: 'Floor', id: '2' },
  { userName: 'Furniture', id: '3' },
  { userName: 'Workers', id: '4' },
  { userName: 'Light', id: '5' },
];

const messageContent = [
  { messageText: 'Your workers are ready to start' },
  { messageText: 'Your order is delayed' },
  { messageText: 'Your color has been changed' },
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App
    postsData={postsData}
    dialogueInfo={dialogueInfo}
    messageContent={messageContent}
  />
);

reportWebVitals();
