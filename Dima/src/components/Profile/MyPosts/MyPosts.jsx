import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './Post/MyPost';

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <MyPost like={p.like} message={p.message} />);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div >
    )
}

export default MyPosts;