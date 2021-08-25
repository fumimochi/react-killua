import React from 'react';
import { NavLink } from 'react-router-dom';
import navb from './Navbar.module.css';
import {  FaCog, FaMusic, FaNewspaper, FaUsers, FaComment, FaUser } from 'react-icons/fa';

const Navbar = () => {
    return (
      <nav className={navb.nav}>
      <div className={navb.item}> 
        <NavLink to='/profile' activeClassName={navb.active}><FaUser />
          <div className={navb.title}>Profile</div>
        </NavLink>
      </div>
      <div className={navb.item}>
        <NavLink to='/dialogs' activeClassName={navb.active}><FaComment />
          <div className={navb.title__big}>Temporary notates</div>
        </NavLink>
      </div>
      <div className={navb.item}>
        <NavLink to='/users' activeClassName={navb.active}><FaUsers />
          <div className={navb.title}>Users</div>
        </NavLink>
      </div> 
      <div className={navb.item}>
        <NavLink to='/news' activeClassName={navb.active}><FaNewspaper />
          <div className={navb.title}>News</div>
        </NavLink>
      </div>
      <div className={navb.item}>
        <NavLink to='/music' activeClassName={navb.active}><FaMusic />
          <div className={navb.title}>Music</div>
        </NavLink>
      </div>    
      <div className={navb.item}>
        <NavLink to='/nastr' activeClassName={navb.active}><FaCog />
          <div className={navb.big__2}>Settings</div>
        </NavLink>
      </div>
      </nav>
    )
}

export default Navbar;