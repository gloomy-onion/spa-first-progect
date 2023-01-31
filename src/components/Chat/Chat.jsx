import React from "react";
import styles from "./Chat.module.css";
import ChatItem from "./ChatItem/ChatItem";
import Message from "./Message/Message";
import {Navigate} from 'react-router';

const Chat = (props) => {
  const { newMessageBody, messageContent, dialogueInfo } = props;
  const onSendMessageClick = () => {
    props.sendMessage();
  };
  const onNewMessageChange = (event) => {
    const body = event.target.value;
    props.updateNewMessageBody(body);
  };

if (!props.isAuth) return <Navigate to={'/login'}/>

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
        <div>
          <div>
            <textarea value={newMessageBody} onChange={onNewMessageChange} />
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
