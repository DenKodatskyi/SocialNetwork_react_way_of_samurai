import React from 'react';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Navbar from './Components/Navbar/Navbar.jsx';
import ProfileContainer from './Components/Navbar/Profile/ProfileContainer';
import DialogsContainer from './Components/Navbar/Dialogs/DialogsContainer';
import News from './Components/Navbar/News/News.jsx';
import Music from './Components/Navbar/Music/Music.jsx';
import UsersContainer from './Components/Navbar/Users/UsersContainer';
import Settings from './Components/Navbar/Settings/Settings.jsx';
import { Route } from 'react-router-dom';

const App = (props) => {

  return (
    <div className="container">
      <div className="app_wrapper">

        <HeaderContainer />
        <Navbar />

        <div className="app_wrapper_content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />

          <Route path="/dialogs" render={() => <DialogsContainer />} />

          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route /* exact */ path="/settings" render={() => <Settings />} />
        </div>

      </div>
    </div>
  );
}





export default App;
