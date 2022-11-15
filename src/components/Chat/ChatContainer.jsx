import React from "react";
import { sendMessage, updateNewMessageBody } from "../../state/chat-reducer";
import Chat from "./Chat";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogueInfo: state.chat.dialogueInfo,
    messageContent: state.chat.messageContent,
    newMessageBody: state.chat.newMessageBody,
  };
};

const ChatContainer = connect(mapStateToProps, {
  updateNewMessageBody,
  sendMessage,
})(Chat);

export default ChatContainer;
