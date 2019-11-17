import React from 'react';
import mod from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="http://www.unificatie.nl/wp-content/uploads/2015/03/flat_earth1.jpg"></img>
            </div>
            <div className={mod.DescriptionBlock}>
                ava + description
        </div>
        </div>
    )
}

export default ProfileInfo;