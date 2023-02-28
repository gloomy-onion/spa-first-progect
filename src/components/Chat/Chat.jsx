import React from "react";
import styles from "./Chat.module.css";
import ChatItem from "./ChatItem/ChatItem";
import Message from "./Message/Message";
import Field from "redux-form/lib/Field";
import { reduxForm } from "redux-form";

const Chat = (props) => {
  const { messageContent, dialogueInfo } = props;

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

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
          <AddMessageForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

let AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={"textarea"}
          name={"newMessageBody"}
          placeholder={"Enter your message"}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};
AddMessageForm = reduxForm({ form: "chatAddMessageForm" })(AddMessageForm);

export default Chat;
