import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = () => {
    return <div>
        My post
        <div>
            New post
        </div>
        <div className={s.post}>
            <div className={s.item}>
                post_1
        </div>
            <div className={s.item}>
                post_2
        </div>
        </div>
    </div>
}

export default MyPosts;