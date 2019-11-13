import React from "react";
import st/* st - style */ from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
  return (
    <div className={`${st.dialog}, ${st.dialog_active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}



export default DialogItem;