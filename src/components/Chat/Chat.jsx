import React from 'react';
import styles from './Chat.module.css';
import cn from 'classnames';
const Chat = (props) => {
  return (
    <div className={styles.dialogues}>
      <div className={styles.dialoguesItems}>
        <div className={cn(styles.dialogue, styles.active)}>Color</div>
        <div className={styles.dialogue}>Floor</div>
        <div className={styles.dialogue}>Furniture</div>
        <div className={styles.dialogue}>Workers</div>
        <div className={styles.dialogue}>Light</div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>Your workers are ready to start</div>
        <div className={styles.message}>Your order is delayed</div>
        <div className={styles.message}>Your color has been changed</div>
      </div>
    </div>
  );
};

export default Chat;
