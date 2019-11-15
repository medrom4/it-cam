import React from 'react';
import mod from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="http://www.unificatie.nl/wp-content/uploads/2015/03/flat_earth1.jpg"></img>
            </div>
            <div>
                ava + description
        </div>
            <MyPosts />
        </div>
    )
}

export default Profile;