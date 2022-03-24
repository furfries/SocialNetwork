import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Navigate } from 'react-router-dom'

const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id}/>)
    
    let newMessageElement = React.createRef();
    
    let sendMessage = () => {
        props.sendMessage();
    }
    let onMessageChange = () => {
        let body = newMessageElement.current.value;
        props.updateNewMessageText(body);
    }
    if (!props.isAuth) return <Navigate replace to={'/login'} />;
    return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
           {dialogsElements}
        </div>
        <div className={s.messages}>
           {messagesElements}
        </div>
        <div className={s.sendBlock}>
        <textarea  onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessageText}/>
        <button onClick={sendMessage}>Send</button>
        </div>
    </div>
    )
}
export default Dialogs;