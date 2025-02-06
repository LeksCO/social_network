import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersConteiner from "./components/Users/UsersConteiner";


const App = (props) => { 
  return (
    <div className="all">
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element= {<Profile/>} />
          <Route path="/dialogs/*" element= {<DialogsContainer/>} />
          <Route path="/users" element = {<UsersConteiner/>} />
          <Route path="/news" element= {<News />} />
          <Route path="/music" element= {<Music />} />
          <Route path="/settings" element= {<Settings />} />
          <Route path="/friends" element= {<Friends />} />
        </Routes>
      </div>
    </div>    
    </div>
  );
};

export default App;
