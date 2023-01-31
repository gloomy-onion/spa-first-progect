import React from "react";
import { sendMessage, updateNewMessageBody } from "../../state/chat-reducer";
import Chat from "./Chat";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogueInfo: state.chat.dialogueInfo,
    messageContent: state.chat.messageContent,
    newMessageBody: state.chat.newMessageBody,
  };
};

export default compose(
  connect(mapStateToProps, {
    updateNewMessageBody,
    sendMessage,
  }),
  withAuthRedirect
)(Chat);
