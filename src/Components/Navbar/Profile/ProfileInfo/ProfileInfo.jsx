import React from "react";
import st/* st - style */ from "./ProfileInfo.module.css"; 

const ProfileInfo = () => {
  return (
    <div>

    <div>
      <img className={st.profileInfo_banner} src="http://we.com.mk/wp-content/uploads/2016/12/greece-islands.jpg" />
    </div>
  
    <div className={st.profileInfo_block}>
      <img className={st.profileInfo_ava} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyoji8MgCPJB60wJ-YT2QYAi1e-6wuZ7wGtCL5_0z4v4wcsa_G&s" />
      + describe
    </div>

  </div>
  )
}


export default ProfileInfo;





