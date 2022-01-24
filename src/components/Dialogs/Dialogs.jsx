import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return <div>
        <NavLink className={dLink => dLink.isActive ? s.active : s.dialog} to={path}>{props.name}</NavLink>
        </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/> )
    return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
           {dialogsElements}
        </div>
        <div className={s.messages}>
           {messagesElements}
        </div>
    </div>
    )
}

export default Dialogs;