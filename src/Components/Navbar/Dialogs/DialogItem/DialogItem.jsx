import React from "react";
import st/* st - style */ from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
  return (
    <div>
    <div className={`${st.dialog}, ${st.dialog_active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>

    <div className={st.dialogItem}>
      <img className={st.dialogItem_img} src="https://a.wattpad.com/cover/84608722-352-k886345.jpg" />
    </div>
    </div>
  )
}



export default DialogItem;