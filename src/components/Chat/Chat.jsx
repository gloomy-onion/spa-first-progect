import React from 'react';
import styles from './Chat.module.css';
import ChatItem from './ChatItem/ChatItem'; 
import Message from './Message/Message';

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
const Chat = (props) => {
  return (
    <div className={styles.dialogues}>
      <div className={styles.dialoguesItems}>
        <div className={styles.dialogue}>
          {dialogueInfo.map((dialogue) => {
            return (
              <ChatItem
                to={dialogue.to}
                userName={dialogue.userName}
                id={dialogue.id}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.messages}>
        {messageContent.map((text) => {
          return <Message messageText={text.messageText} />;
        })}
      </div>
    </div>
  );
};

export default Chat;
