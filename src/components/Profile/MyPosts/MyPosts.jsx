import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message}/> )
    let newPostElement = React.createRef();
    let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
    }
    return (
        <div className={s.postsBlock}>
                <h3>My Posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={ addPost }>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;