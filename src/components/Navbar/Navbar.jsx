import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {  
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
      </div>
      <div className={s.item + ' ' + s.friends}>
        <NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink>
        <img src="https://avatars.mds.yandex.net/i?id=b6b7dcbf38d37c6e4837d7bf38951129b3b6fd9b-12588502-images-thumbs&n=13" alt="ava"></img>
        <img src="https://avatars.mds.yandex.net/i?id=b6b7dcbf38d37c6e4837d7bf38951129b3b6fd9b-12588502-images-thumbs&n=13" alt="ava"></img>
        <img src="https://avatars.mds.yandex.net/i?id=b6b7dcbf38d37c6e4837d7bf38951129b3b6fd9b-12588502-images-thumbs&n=13" alt="ava"></img>
      
      </div>
    </nav>
  );
};

export default Navbar;
