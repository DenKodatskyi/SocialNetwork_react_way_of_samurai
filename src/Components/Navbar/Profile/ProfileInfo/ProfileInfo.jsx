import React from "react";
import st/* st - style */ from "./ProfileInfo.module.css";
import Preloader from "../../../assets/Preloader/preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return <div>
    <div><img className={st.profileInfo_banner} src="http://we.com.mk/wp-content/uploads/2016/12/greece-islands.jpg" /></div>

    <div className={st.profileInfo_block}>
      <div><img className={st.profileInfo_ava} src={props.profile.photos.large} /></div>

      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />

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
  </div>
}


export default ProfileInfo;





