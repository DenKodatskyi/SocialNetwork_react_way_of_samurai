import React from "react";
import st/* st - style */ from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={st.dialog}>{props.message}</div>
  )
}


export default Message;