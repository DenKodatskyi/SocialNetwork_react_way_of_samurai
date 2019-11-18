import React from "react";
import st/* st - style */ from "./Message.module.css";

const Message = (props) => {
  return (
    <div>
      <div className={st.messageItem}>
      <img className={st.messageItem_img} src="http://sun9-38.userapi.com/c622021/v622021810/2adb4/os0J4bIotxQ.jpg?ava=1" />
    <div className={st.dialog}>{props.message}</div>
    </div>
    </div>
    
  )
}


export default Message;