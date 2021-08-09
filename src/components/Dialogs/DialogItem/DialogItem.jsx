import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/'+ props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src='https://lh3.googleusercontent.com/proxy/tMqtYMfUy45KZB4NIZx7eI6jfYkP9_kn-i2wpUUcHDwFlclGabBlAV2ZS4zy1uhJkPFz_vRS6UPOcP2MdDYVRT64fpht-PJX6IQBkZw2dbuSNP_zveihj6RtReb3vV6OUCHrCYKGEgVo4sJjCdi02-EU-xxLGA'/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;