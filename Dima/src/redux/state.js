let rerenderEntireTree = () => {
    alert('hui');
}

let state = {

    profilePage: {
        posts: [
            {id: 1, like: 15, message: 'Hi, fuck you!!!'},
            {id: 2, like: 30, message: 'Hi, fuck you too!!! Motherfucker!!!'}
        ],
        newPostText: ''
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimon'},
            {id: 2, name: 'Kirill'},
            {id: 3, name: 'Ajnura'},
            {id: 4, name: 'Barsik'},
            {id: 5, name: 'Plushka'}
        ],
        messages: [
            {id: 1, msg: 'Miay'},
            {id: 2, msg: 'How are your miay?'},
            {id: 3, msg: 'Thx, very myr!'}
        ],
        newMessageText: ''
    },

    sidebar: {
        usersOnline: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Ajnura'},
            {id: 3, name: 'Kirill'}
        ]
    }

}

export const addPost = () => {
    let newPost = {
        id: 3,
        like: 0,
        message: state.profilePage.newPostText
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 4,
        msg: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;

