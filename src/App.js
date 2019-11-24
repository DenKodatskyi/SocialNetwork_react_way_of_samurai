import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Profile from './Components/Navbar/Profile/Profile.jsx';
import DialogsContainer from './Components/Navbar/Dialogs/DialogsContainer' ;
import News from './Components/Navbar/News/News.jsx';
import Music from './Components/Navbar/Music/Music.jsx';
import UsersContainer from './Components/Navbar/Users/UsersContainer';
import Settings from './Components/Navbar/Settings/Settings.jsx';
import { Route } from "react-router-dom";



const App = (props) => {

  return (
    <div className="container">
      <div className="app_wrapper">

        <Header />
        <Navbar />

        <div className="app_wrapper_content">
          <Route path="/profile" render={() => <Profile store={props.store} />} />

          <Route path="/dialogs" render={() => <DialogsContainer store={props.store} />} />

          <Route path="/news" render={() => <News />} />
          <Route path="/Music" render={() => <Music />} />
          <Route path="/Users" render={() => <UsersContainer />} />
          <Route /* exact */ path="/Settings" render={() => <Settings />} />
        </div>

      </div>
    </div>
  );
}





export default App;
