import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://games.mail.ru/pre_1280x720_resize/hotbox/content_files/article/2019/01/23/379ead38d2d94960a1865a013c15c367.jpg?quality=85" />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
			</div>
        </div>
    )
}

export default ProfileInfo;