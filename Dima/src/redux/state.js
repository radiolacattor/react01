let store = {
    _state: {
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
    },
    _callSubscriber() {
        alert('hui');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                like: 777,
                message: this._state.profilePage.newPostText
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                msg: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-MEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;
