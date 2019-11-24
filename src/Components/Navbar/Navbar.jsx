import React from "react";
import st/* st - style */ from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import UsersItem from "./Users/UsersItem/UsersItem.jsx";

const Navbar = (props) => {
  return (
    <nav className={st.nav}>
      <div className={st.item}>
        <NavLink to="/profile" activeClassName={st.active}>Profile</NavLink>
      </div>
      <div className={st.item}>
        <NavLink to="/dialogs" activeClassName={st.active}>Messages</NavLink>
      </div>
      <div className={st.item}>
        <NavLink to="/news" activeClassName={st.active}>News</NavLink>
      </div>
      <div className={st.item}>
        <NavLink to="/music" activeClassName={st.active}>Music</NavLink>
      </div>
      <div className={st.item}>
        <NavLink to="/Users" activeClassName={st.active} >Users
          <div className={st.usersItem}>
            <UsersItem />
            <UsersItem />
            <UsersItem />
          </div>
        </NavLink>
        <div className={st.item}>
          <NavLink to="/settings" activeClassName={st.active}>Settings</NavLink>
        </div>
      </div>
    </nav>
  )
}


export default Navbar;





