import React from 'react';
import st/* st - style */ from "./Users.module.css";
import userPhoto from "../../../Components/assets/img/AdeptusMechanicus.jpg"
import { NavLink } from "react-router-dom";

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pagesArr = [];
  for (let i = 1; i <= pagesCount; i++) {
    pagesArr.push(i);
  }

  return <div className={st.users}>
    <div className={st.pages}>
      {pagesArr.map(/* p - pages */ p => {
        return <span className={props.currentPage === p && st.active}
          onClick={() => { props.onPageChanged(p); }} >{p}</span>
      })}
    </div>

    {props.users.map(/* u - users */ u => <div className={st.userItem} key={u.id}>

      <div>
        <div>
          <NavLink to={"/profile/" + u.id} >
            <img className={st.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} />
          </NavLink>
        </div>

        <div>
          {u.followed
            ? <button disabled={props.followInProgress.some(id => id === u.id)} onClick={() => {
              props.nofollow(u.id)}}>Nofollow</button>

            : <button disabled={props.followInProgress.some(id => id === u.id)} onClick={() => {
              props.follow(u.id)}}>Follow</button>}
        </div>
      </div>

      <div>
        <div>{u.name}</div>
        <div>{u.status}</div>
      </div>

      <div>
        <div>{"u.location.country"}</div>
        <div>{"u.location.city"}</div>
      </div>

    </div>)}
  </div>
}

export default Users;