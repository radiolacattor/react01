import React from 'react';
import s from './MyPosts.module.css';
import MyPost from './Post/MyPost';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";



const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <MyPost like={p.like} message={p.message}/>);

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;