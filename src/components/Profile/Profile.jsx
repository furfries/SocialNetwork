import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return <div>
    <img className={s.bigimg} src='https://apollosat.com/wp-content/uploads/2016/06/IridiumCommunications-FeatureImage.jpg' alt='?' />
    <div>
        ava + description
    </div>
        <MyPosts />
    </div>
}
export default Profile;