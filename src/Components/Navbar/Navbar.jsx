import React from "react";
import st/* st - style */ from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import FriendsItem from "./Friends/FriendsItem/FriendsItem";

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
          <NavLink to="/settings" activeClassName={st.active}>Settings</NavLink>
        </div>
        <div className={st.item}>
          <NavLink to="/friends" activeClassName={st.active} >Friends
          <div className={st.friendsItems}>
            <FriendsItem />
            <FriendsItem />
            <FriendsItem />
          </div>
          
          </NavLink>
        </div>
      </nav>
  )
}


export default Navbar;





