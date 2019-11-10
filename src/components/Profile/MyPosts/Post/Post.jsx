import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://storage.needpix.com/rsynced_images/avatar-1292817_1280.png'></img>
            post 1
            <div>like</div>
        </div>

    )       
}

export default Post;