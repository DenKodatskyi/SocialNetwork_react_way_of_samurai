import React from "react";
import st/* st - style */ from "./Profile.module.css";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus } from "./../../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    if (!id) { id = 2; }
    this.props.getUserProfile(id);
    this.props.getStatus(id);
  }

  render() {
    return (
      <div className={st.profile}>        
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer);





