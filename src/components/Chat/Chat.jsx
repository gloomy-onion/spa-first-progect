import React from 'react';
import styles from './Chat.module.css';
import ChatItem from './ChatItem/ChatItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../state/chat-reducer';


const Chat = (props) => {
    const newMessageBody = props.newMessageBody;
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());

    };
    const onNewMessageChange = (event) => {
        const body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };
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
                <div className={styles.textArea}>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange}
                                   placeholder="Enter your message"/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
