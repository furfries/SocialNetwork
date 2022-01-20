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

const Dialogs = () => {
    return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
           <DialogItem name='Maxim' id='1'/>
           <DialogItem name='Alexey' id='2'/>
           <DialogItem name='Alexandr' id='3'/>
           <DialogItem name='Pavel' id='4'/>
           <DialogItem name='Milana' id='5'/>
           <DialogItem name='Olga' id='6'/>
        </div>
        <div className={s.messages}>
            <Message message='Hi!' />
            <Message message='Sup' />
            <Message message='Text me ASAP' />
            <Message message='What are u doing?' />
            <Message message='See u' />
            <Message message='On my way' />
        </div>
    </div>
    )
}

export default Dialogs;