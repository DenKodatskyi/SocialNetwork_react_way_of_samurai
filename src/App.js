import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Profile from './Components/Navbar/Profile/Profile.jsx';
import Dialogs from './Components/Navbar/Dialogs/Dialogs.jsx';
import News from './Components/Navbar/News/News.jsx';
import Music from './Components/Navbar/Music/Music.jsx';
import Settings from './Components/Navbar/Settings/Settings.jsx';
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="app_wrapper">

          <Header />
          <Navbar />

          <div className="app_wrapper_content">
            <Route /* exact */ path="/profile" component={Profile} />
            <Route /* exact */ path="/dialogs" component={Dialogs} />
            <Route /* exact */ path="/news" component={News} />
            <Route /* exact */ path="/Music" component={Music} />
            <Route /* exact */ path="/Settings" component={Settings} />
          </div>

        </div>
      </div>
    </BrowserRouter >
  );
}





export default App;
