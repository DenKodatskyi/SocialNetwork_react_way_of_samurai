import React from "react";
import st/* st - style */ from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = () => {
  return (
    <div className={st.profile}>

      <ProfileInfo />
      <MyPosts />

    </div>
  )
}


export default Profile;





