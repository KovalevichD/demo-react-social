import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className="logo">
                <img className={s.logoImg} src="https://static.rfstat.com/renderforest/images/v2/landing-pics/logo_landing/ma5.png" alt="logotype" />

            </div>
            <div className={s.login}>
                <NavLink to='/login'>{props.authData.isAuth 
                    ? <div>
                    {props.authData.login}
                    <button onClick={props.logout}>Log out</button>
                    </div>
                    : 'Login' }</NavLink>
            </div>
        </div>
    );
}

export default Header;