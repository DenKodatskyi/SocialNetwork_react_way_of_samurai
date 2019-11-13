import React from "react";
import st/* st - style */ from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";


const Dialogs = (props) => {

  let dialogs = [
    { id: 0, name: "Dimych" },
    { id: 1, name: "Ben" },
    { id: 2, name: "Sasha" }
  ]

  let dialogsElements = dialogs.map((d/*d - dialogEl */) => <DialogItem name={d.name} id={d.id} />);

  let messages = [
    { id: 0, message: "Hi" },
    { id: 1, message: "Hi my name is Ben" },
    { id: 2, message: "Hello" }
  ]

  let messagesElements = messages.map((m/*m - messageEl */) => <Message message={m.message} id={m.id} />);

  return (
    <div className={st.dialogs}>

      <div className={st.dialogs_items}>
        {dialogsElements}
      </div>

      <div className={st.messages}>
        {messagesElements}
      </div>


    </div>
  )
}

export default Dialogs;