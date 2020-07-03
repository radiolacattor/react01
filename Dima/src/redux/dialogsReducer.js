const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-MEW-MESSAGE-TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 4, msg: state.newMessageText}],
                newMessageText: ''
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state;

    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const onMessageChangeActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;