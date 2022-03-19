import Preloader from '../../common/preloader/preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader />
    }
    return <div>
    <img className={s.bigimg} src='https://apollosat.com/wp-content/uploads/2016/06/IridiumCommunications-FeatureImage.jpg' alt='?' />
    <div className={s.discriptionBlock}>
        <img src={props.profile.photos.large}/>
    </div>
    <div className={s.discription}>
        <h3>{props.profile.fullName}</h3>
        <span>{props.profile.aboutMe}</span>
    </div>
    </div>}
export default ProfileInfo;