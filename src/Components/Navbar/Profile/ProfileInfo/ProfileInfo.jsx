import React from "react";
import st/* st - style */ from "./ProfileInfo.module.css"; 
import Preloader from "../../../assets/Preloader/preloader";
import ProfileInfoUser from "./ProfileInfoUser";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>

    <div>
      <img className={st.profileInfo_banner} src="http://we.com.mk/wp-content/uploads/2016/12/greece-islands.jpg" />
    </div>
  
    <ProfileInfoUser profile={props.profile} />

  </div>
  )
}

export default ProfileInfo;





