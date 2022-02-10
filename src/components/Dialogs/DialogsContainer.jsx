import React from 'react'
import Dialogs from './Dialogs'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;
    
    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageTextActionCreator(body));
    }
    return <Dialogs updateNewMessageText={onMessageChange} 
                    sendMessage={sendMessage}
                    dialogsPage={state}/>
}
export default DialogsContainer;