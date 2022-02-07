const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {
    _state: {
        profilePage: {
            posts : [
            {id: 1, message: 'Hello World!'},
            {id: 2, message: 'How are you?'},
            ],
            newPostText : 'example'
    },
        dialogsPage: {
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
            newMessageText: 'example',
    },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {},
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch (action) {
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } 
        else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if  (action.type === SEND_MESSAGE){
            let newMessage = {
                id: 7,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }

    },
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text,});

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default store;