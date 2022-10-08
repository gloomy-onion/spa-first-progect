import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../state/chat-reducer';
import Chat from './Chat';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        dialogueInfo: state.chat.dialogueInfo,
        messageContent: state.chat.messageContent,
        newMessageBody: state.chat.newMessageBody
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    };
};

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;
