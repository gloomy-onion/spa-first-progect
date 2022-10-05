import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../state/chat-reducer';
import Chat from './Chat';
import StoreContext from '../../state/StoreContext';
import {connect} from 'react-redux';


const ChatContainer = () => {
    const onSendMessageClick = () => {
        store.dispatch(sendMessageCreator());
    };
    const onNewMessageChange = (body) => {
        store.dispatch(updateNewMessageBodyCreator(body));
    };
    return (
        <StoreContext.Consumer>
            { store => {
                const state = store.store.getState();
                return <Chat updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                             dialogueInfo={state}/>
            }
        };
        </StoreContext.Consumer> )
};

let f1

const SuperChatContainer = connect()(Chat);

export default ChatContainer;
