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
    sendMessage() {
        let newMessage = {
            id: 7,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    
}

export default store;