import React from 'react';
import s from './Music.module.css'


const Music = () => {
    return (
        <div className={s.wrapMusic}>
            <h2 className={s.title}>My favourite music!</h2>
        </div>
    );
}

export default Music;