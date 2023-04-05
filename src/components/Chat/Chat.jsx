import React from "react";
import styles from "./Chat.module.css";
import ChatItem from "./ChatItem/ChatItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import {
  maxLengthCreator,
  required,
} from "../../helpers/validators/validators";
import Button from '../common/Button/Button';

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

const maxLength60 = maxLengthCreator(60);

let AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength60]}
          name={"newMessageBody"}
          placeholder={"Enter your message"}
        />
      </div>
      <div>
        <Button text={'Send'}/>
      </div>
    </form>
  );
};

AddMessageForm = reduxForm({ form: "chatAddMessageForm" })(AddMessageForm);

export default Chat;
