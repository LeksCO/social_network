import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {  

  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map((d) => {
    return (
      <DialogItem className="dialogItem" name={d.name} key={d.id} id={d.id} ava={d.ava} />
    );
  });   
  let messagesElements = state.messages.map((m) => {
    return (
      <Message
        className={s.message}
        message={m.message}
        key={m.id}
        id={m.messageId}
      ></Message>
    );
  });
  let newMessageBody = state.newMessageBody;


  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body)        
  } 

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.sendMessageCreato}>        
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div><textarea 
          placeholder="Enter your message" 
          onChange={onNewMessageChange}          
          value={newMessageBody}
          ></textarea></div>
          <div>
            <button onClick={onSendMessageClick} className={s.addMessageButton}>
          Send
        </button>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Dialogs;
