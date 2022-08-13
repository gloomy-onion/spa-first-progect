import React from 'react';
import styles from './../Chat.module.css';


const Message = (props) => {
  const { messageText } = props;
  return <div className={styles.messages}>{messageText}</div>;
};


export default Message;
