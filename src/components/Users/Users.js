import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/users.png';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';

const Users = (props) => {
    // const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    // const arrOfPages = [];

    // for (let page = 1; page <= pagesCount; page++) {
    //     arrOfPages.push(page);
    // }

    return (
        <div className={s.wrapperGlobal}>
            {/* <div>
                {arrOfPages.map(p => {
                    return <span className={p === props.currentPage ? s.activePage : s.numberPage} onClick={(e) => { props.onPageChenged(p) }}>{p}</span>
                })}
            </div> */}
            <Paginator
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChenged={props.onPageChenged}
                portionSize={10}
            />
            <h2 className={s.title}>Users</h2>
            {props.users.map(user => <div className={s.wrapper}>
                <div className={s.wrapperIcon}>
                    <div className={s.userIcon}>
                        <NavLink to={'/profile/' + user.id} >
                            <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt='User icon' />
                        </NavLink>
                        <div >{user.followed
                            ? <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                            : <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => { props.follow(user.id) }}>Follow</button>}</div>
                    </div>
                </div>
                <div className={s.wrapperMain}>
                    <div className={s.left}>
                        <span className={s.name}>{user.name}</span>
                        <span className={s.status}>{user.status}</span>
                    </div>
                    <div className={s.right}>
                        <span className={s.locationCity}>{"user.location.city + ', '"}</span>
                        <span className={s.locationCountry}>{"user.location.country"}</span>
                    </div>
                </div>
            </div>
            )}
            <button className={s.button}>Show more</button>
        </div>
    )
}

export default Users;