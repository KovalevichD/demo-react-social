import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
// import Friends from './Friends/Friends';

const Navbar = (props) => {
    return (
        <nav className={s.navigation}>
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="#" className={s.link}>News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="#" className={s.link}>Settings</NavLink>
                </li>
            </ul>
            {/* <Friends state={props.state}/> */}
        </nav>
    );
}

export default Navbar;