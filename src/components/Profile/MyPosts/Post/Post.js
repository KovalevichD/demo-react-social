import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
           <img src="https://www.abc.net.au/news/image/8314104-1x1-940x940.jpg" alt="avatar"/>
            <span>{props.message}</span>
            <div>
                <span>like</span>
                <span>{props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;