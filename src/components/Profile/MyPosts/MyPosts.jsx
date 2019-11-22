import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        { id: 1, message: 'Привет! Как сделать пост?', likesCount: 44 },
        { id: 2, message: 'Это моя страница, ты не можешь!', likesCount: 44 },
    ]

    let postElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    return (
        <div className={s.postBlock}>
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

                {postElements}

            </div>
        </div>
    )
}

export default MyPosts;