import React from "react";
import st/* st - style */ from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {

  return (
    <div className={st.profile}>

      <ProfileInfo />
      <MyPostsContainer store={props.store} />

    </div>
  )
}


export default Profile;





