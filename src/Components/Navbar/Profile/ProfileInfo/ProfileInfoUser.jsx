import React from "react";
import st/* st - style */ from "./ProfileInfo.module.css";

const ProfileInfoUser = (props) => {
  return (
    <div className={st.profileInfo_block}>
      <img className={st.profileInfo_ava} src={props.profile.photos.large} />
      <div>
        <div>{props.profile.aboutMe}</div>
        <div>{props.profile.contacts.facebook}</div>
        <div>{props.profile.contacts.vk}</div>
        <div>{props.profile.contacts.twitter}</div>
        <div>{props.profile.contacts.instagram}</div>
        <div>{props.profile.contacts.github}</div>
        <div>{props.profile.lookingForAJobDescription}</div>
        <div>{props.profile.fullName}</div>
        <div>{props.profile.userId}</div>
      </div>
    </div>
  )
}

export default ProfileInfoUser;





