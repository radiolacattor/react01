import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './Post/MyPost';

const MyPosts = () => {
    return (
        <div>
            my posts
            <div className={s.posts}>
                <MyPost like="15" message='Hi, fuck you!!!' />
                <MyPost like="30" message='Hi, fuck you too!!! Motherfucker!!!' />
            </div>
        </div >
    )
}

export default MyPosts;