import React from "react";
import { sendMessage } from "../../state/chat-reducer";
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
    sendMessage,
  }),
  withAuthRedirect
)(Chat);
