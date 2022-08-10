import React from 'react';
import styles from './Chat.module.css';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

const Dialogues = (props) => {
  const { userName, id } = props;
  return (
    <div className={styles.dialogue}>
      <NavLink
        to={`/chat/${id}`}
        className={(navData) => (navData.isActive ? styles.active : '')}
      >
        {userName}
      </NavLink>
    </div>
  );
};
const dialogueInfo = [
  { userName: 'Color', id: '1' },
  { userName: 'Floor', id: '2' },
  { userName: 'Furniture', id: '3' },
  { userName: 'Workers', id: '4' },
  { userName: 'Light', id: '5' },
];

const Messages = (props) => {
  const { messageText } = props;
  return <div className={styles.messages}>{messageText}</div>;
};
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
              <Dialogues
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
          return <Messages messageText={text.messageText} />;
        })}
      </div>
    </div>
  );
};

export default Chat;
