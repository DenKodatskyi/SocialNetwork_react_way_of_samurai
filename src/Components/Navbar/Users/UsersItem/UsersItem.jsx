import React from "react";
import st/* st - style */ from "./UsersItem.module.css";
import { NavLink } from "react-router-dom";

const UsersItem = (props) => {
  let path = "/dialogs/" + props.id
  return (
    <div>
    <div className={`${st.dialog}, ${st.dialog_active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>

    <div className={st.usersItem}>
      <img className={st.usersItem_img} src="https://a.wattpad.com/cover/84608722-352-k886345.jpg" />
    </div>
    </div>
  )
}



export default UsersItem;