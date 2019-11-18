import React from "react";
import st/* st - style */ from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";
import { updateNewMessageBodyAC, sendMessageAC } from './../../../redux/dialogsReducer';


const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map((d/*d - dialogEl */) => <DialogItem name={d.name} id={d.id} />);

  let messagesElements = props.dialogsPage.messages.map((m/*m - messageEl */) => <Message message={m.message} id={m.id} />);

  let newMessageBody = props.newMessageBody;

  let onSendMessageClick = () => {
    props.dispatch(sendMessageAC());
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageBodyAC(body));
  }

  return (
    <div className={st.dialogs}>

      <div className={st.dialogs_items}>
        {dialogsElements}
      </div>

      <div className={st.messages}>
        <div>{messagesElements}</div>

        <div>
          <textarea placeholder="Your message..."
          value={newMessageBody} 
          onChange={onNewMessageChange} ></textarea>
        </div>        
        <div><button onClick={onSendMessageClick}>Send</button></div>
      </div>

    </div>
  )
}

export default Dialogs;