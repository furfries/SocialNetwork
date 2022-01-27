import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    
    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)
    
    let newMessageElement = React.createRef();
    
    let sendMessage = () => {
        props.sendMessage();
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
           {dialogsElements}
        </div>
        <div className={s.messages}>
           {messagesElements}
        </div>
        <div className={s.sendBlock}>
        <textarea  onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}/>
        <button onClick={sendMessage}>Send</button>
        </div>
    </div>
    )
}

export default Dialogs;