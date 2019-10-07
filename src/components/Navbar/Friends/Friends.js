import React from 'react';
import s from './Friends.module.css'
import Friend from './Friend/Friend';

const Friends = (props) => {
    const friendsItems = props.state.friends.map(elem => <Friend name={elem.name} url={elem.url} />)
    return (
        <aside className={s.sideBar}>
            <h3 className={s.title}>Friends</h3>
            <ul className={s.listOfFriends}>
                {friendsItems}fdfg
            </ul>
        </aside>
    );
}

export default Friends;