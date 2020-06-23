import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
