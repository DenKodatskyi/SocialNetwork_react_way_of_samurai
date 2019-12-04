import React from "react";
import st/* st - style */ from "./Profile.module.css";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import { getUserProfile } from "./../../../redux/profileReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    if (!id) {id = 2;}
    this.props.getUserProfile(id);
  }

  render() {
    return (
      <div className={st.profile}>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);





