import React from "react";
import st/* st - style */ from "./Header.module.css";
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={st.header}>
      <img src="https://placeit-assets.s3-accelerate.amazonaws.com/landing-pages/landing-page-redo-make-a-gaming-logo/Deadnauts-Esports-Logo-Maker.png" />

      <div className={st.login_block}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>

    </header>

  )
}


export default Header;





