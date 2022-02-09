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
        case SEND_MESSAGE:
            let body = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({id:7, message: body});
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body;
            return state
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: text});

export default dialogsReducer;