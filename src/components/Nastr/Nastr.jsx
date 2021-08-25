import React  from 'react';
import s from './Nastr.module.css';
import {  FaFrown } from 'react-icons/fa';

const Nastr = () => {
    return (
        <div className={s.nastr}>
            <text>Settings are currently inavailable</text>  <FaFrown />
        </div>
    )
}

export default Nastr;
