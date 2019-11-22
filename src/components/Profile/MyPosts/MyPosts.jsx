import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        { id: 1, message: 'Привет! Как сделать пост?', likesCount: 44 },
        { id: 2, message: 'Это моя страница, ты не можешь!', likesCount: 44 },
    ]

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

            <Post message={postData[0].message} likesCount={postData[0].likesCount} />

            <Post message={postData[1].message} likesCount={postData[0].likesCount} />

        </div>


    </div>
}

export default MyPosts;