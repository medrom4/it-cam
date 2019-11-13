import React from 'react';
import s from './Post.module.css';

const Post = (props) => {



    return (
        <div className={s.item}>
            <img src='https://storage.needpix.com/rsynced_images/avatar-1292817_1280.png'></img>

            {props.message}

            <div> {props.like} like</div>

        </div>

    )
}

export default Post;