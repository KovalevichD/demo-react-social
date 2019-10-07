import React from 'react';
import s from './Friend.module.css'

const Friend = (props) => {
    return (
        <li className={s.item}>
            <img src={props.url} alt="user" />
            <span className={s.nameFriend}>{props.name}</span>
        </li>
    );
}

export default Friend;