let rerenderEntireTree = () => {

}

let state = {
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
};

export let sendMessage = () => {
    let newMessage = {
        id: 7,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;
