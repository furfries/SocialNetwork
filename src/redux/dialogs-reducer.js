const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs : [
    {id : 1, name:'Maxim'},
    {id : 2, name:'Alexey'},
    {id : 3, name:'Alexandr'},
    {id : 4, name:'Pavel'},
    {id : 5, name:'Milana'},
    {id : 6, name:'Olga'},
],
    messages : [
    {id : 1, message:'Hi!'},
    {id : 2, message:'Sup'},
    {id : 3, message:'Text me ASAP'},
    {id : 4, message:'What r u doing?'},
    {id : 5, message:'See u'},
    {id : 6, message:'On my way'},
],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let stateCopy = {...state}
            let body = state.newMessageText;
            stateCopy.messages = [...state.messages]
            stateCopy.newMessageText = '';
            stateCopy.messages.push({id:7, message: body});
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.body;
            return stateCopy
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: text});

export default dialogsReducer;