import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            posts : [
            {id: 1, message: 'Hello World!'},
            {id: 2, message: 'How are you?'},
            ],
            newPostText : ''
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
            newMessageText: '',
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state);
    },
}

export default store;