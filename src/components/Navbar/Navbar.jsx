import React from 'react';
import { NavLink } from 'react-router-dom';
import navb from './Navbar.module.css';

const Navbar = () => {
    return (
      <nav className={navb.nav}>
      <div className={navb.item}>
        <NavLink to='/profile' activeClassName={navb.active}>Profile</NavLink>
      </div>
      <div className={navb.item}>
        <NavLink to='/dialogs' activeClassName={navb.active}>Messages</NavLink>
      </div>
      <div className={navb.item}>
        <NavLink to='/news' activeClassName={navb.active}>News</NavLink>
      </div>
      <div className={navb.item}>
        <NavLink to='/music' activeClassName={navb.active}>Music</NavLink>
      </div>    
      <div className={navb.item}>
        <NavLink to='/nastr' activeClassName={navb.active}>Settings</NavLink>
      </div>
      <div className={navb.item}>
        <NavLink to='/users' activeClassName={navb.active}>Users</NavLink>
      </div>   
      </nav>
    )
}

export default Navbar;