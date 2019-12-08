import React from "react";
import st/* st - style */ from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
  return (
    <div className={st.profile}>

      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer  />

    </div>
  )
}


export default Profile;





