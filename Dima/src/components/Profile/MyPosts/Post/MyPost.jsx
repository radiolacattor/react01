import React from 'react';
import s from './MyPost.module.css';

const MyPost = (props) => {
    return (
        <div className={s.item}>
            <img src="https://peopletalk.ru/files/articles/6/5253/s5_8dad37e82e74f542e022285ff451078f.jpg" />
            <div>
                {props.message}
            </div>
            <div>
                <span>Like: {props.like}</span>
            </div>
        </div>
    )
}

export default MyPost;