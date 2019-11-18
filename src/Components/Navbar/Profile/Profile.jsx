import React from "react";
import st/* st - style */ from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';


const Profile = (props) => {

  return (
    <div className={st.profile}>

      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts}        
      newPostText={props.profilePage.newPostText} 
      dispatch={props.dispatch} />

    </div>
  )
}


export default Profile;





