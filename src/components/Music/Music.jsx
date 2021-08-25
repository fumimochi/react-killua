import React from 'react';
import s from './Music.module.css';
import {  FaFrown } from 'react-icons/fa';

const Music = (props) => {
    return (
        <div className={s.music}>
            <text>No music added yet</text> <FaFrown />
        </div>
    )
}

export default Music;
