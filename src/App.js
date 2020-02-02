import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Navbar from './Components/Navbar/Navbar.jsx';
import ProfileContainer from './Components/Navbar/Profile/ProfileContainer';
import DialogsContainer from './Components/Navbar/Dialogs/DialogsContainer';
import News from './Components/Navbar/News/News.jsx';
import Music from './Components/Navbar/Music/Music.jsx';
import UsersContainer from './Components/Navbar/Users/UsersContainer';
import Settings from './Components/Navbar/Settings/Settings.jsx';
import { withRouter, Route } from 'react-router-dom';
import Login from './Components/Header/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initialApp } from './redux/appReducer'
import Preloader from './Components/assets/Preloader/preloader';

class App extends Component {
  componentDidMount() {
    this.props.initialApp();
  }

  render() {
    if (!this.props.initial) {
      return <Preloader />
    }

    return (
      <div className="container">
        <div className="app_wrapper">

          <HeaderContainer />
          <Navbar />

          <div className="app_wrapper_content">
            <Route path="/profile/:id?" render={() => <ProfileContainer />} />

            <Route path="/dialogs" render={() => <DialogsContainer />} />

            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route /* exact */ path="/settings" render={() => <Settings />} />
            <Route /* exact */ path="/login" render={() => <Login />} />
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initial: state.app.initial
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initialApp }))(App);

