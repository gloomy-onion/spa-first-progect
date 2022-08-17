import React from 'react';
import styles from './Chat.module.css';
import ChatItem from './ChatItem/ChatItem';
import Message from './Message/Message';


const Chat = (props) => {
    return (
        <div className={styles.dialogues}>
            <div className={styles.dialoguesItems}>
                <div className={styles.dialogue}>
                    {props.dialogueInfo.map((dialogue) => {
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
                {props.messageContent.map((text) => {
                    return <Message messageText={text.messageText}/>;
                })}
            </div>
        </div>
    );
};

export default Chat;
