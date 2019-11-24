import React from "react";
import st/* st - style */ from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../../img/AdeptusMechanicus.jpg"

class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
    this.props.setUsers(response.data.items);
  });
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pagesArr = [];
    for (let i = 1; i <= pagesCount; i++) {
      pagesArr.push(i);
    }

    return (
      <div className={st.users}>

        <div className={st.pages}>

          {pagesArr.map(/* p - pages */ p => {
            return <span className={this.props.currentPage === p && st.active}
              onClick={() => { this.onPageChanged(p); }} >{p}</span>
          })}

        </div>
        {this.props.users.map(/* u - users */ u => <div className={st.userItem} key={u.id}>
          <div>
            <div  >
              <img className={st.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} />
            </div>
            <div>
              {u.followed
                ? <button onClick={() => { this.props.nofollow(u.id) }}>Nofollow</button>
                : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
    )
  }
}

export default Users;