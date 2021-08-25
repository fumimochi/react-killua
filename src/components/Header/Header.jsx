import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (  
      <header className={s.header}>
        <img src='https://cdn.logo.com/hotlink-ok/enterprise/eid_422203f0-477b-492b-9847-689feab1452a/logo-dark-2020.png'/>
      
        <div className={s.loginBlock}>
          {props.isAuth 
          ? <div> <span>The user {props.login}`s connected successfully</span> <button onClick={props.logout}>Log out</button></div> 
          : <NavLink to={'/login'}>Login</NavLink> }
        </div>
      </header>
    )
}

export default Header;