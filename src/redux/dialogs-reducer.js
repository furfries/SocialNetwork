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
    let stateCopy;
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = state.newMessageText;
            return {
                ...state,
                newMessageText : '',
                messages : [...state.messages, {id:7, message: body}],
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText : action.body,
            }
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: text});

export default dialogsReducer;