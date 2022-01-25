import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={s.dialogStuff}>
        <img className={s.avatar} src='https://cdn-icons-png.flaticon.com/512/147/147140.png' alt='?'/>
        <NavLink className={dLink => dLink.isActive ? s.active : s.dialog} to={path}>{props.name}</NavLink>
        </div>
}

export default DialogItem;