import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div className={s.postBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </div>
        <div className={s.post}>

            <Post message='HI, how are you?' like="44" />

            <Post message="It's my first post" like="12" />

        </div>


    </div>
}

export default MyPosts;