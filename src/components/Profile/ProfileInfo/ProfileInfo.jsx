import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div>
    <img className={s.bigimg} src='https://apollosat.com/wp-content/uploads/2016/06/IridiumCommunications-FeatureImage.jpg' alt='?' />
    <div className={s.discriptionBlock}>
        ava + description
    </div>
    </div>}
export default ProfileInfo;