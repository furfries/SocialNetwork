import s from './Post.module.css';

const Post = (props) => {
    return (
                <div className={s.item}>
                    <img src='https://cdn-icons-png.flaticon.com/512/147/147140.png' alt='?'/>
                    {props.message}
                </div>
    )
}
export default Post;