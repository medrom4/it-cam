import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div>
        My post
        <div>
            New post
        </div>
        <div className={s.post}>
           <Post />             
        </div>
    </div>
}

export default MyPosts;