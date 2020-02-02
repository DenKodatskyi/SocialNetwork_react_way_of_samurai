import React from "react";
import st/* st - style */ from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";
import AddMessageFormRedux from "./Message/AddMessageForm.jsx";


const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d/*d - dialogEl */) => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = state.messages.map((m/*m - messageEl */) => <Message message={m.message} id={m.id} />);
  let newMessageBody = state.newMessageBody;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  return (
    <div className={st.dialogs}>

      <div className={st.dialogs_items}>
        {dialogsElements}
      </div>

      <div className={st.messages}>
        <div>{messagesElements}</div>

        <AddMessageFormRedux onSubmit={addNewMessage} />

      </div>
    </div>
  )
}


export default Dialogs;