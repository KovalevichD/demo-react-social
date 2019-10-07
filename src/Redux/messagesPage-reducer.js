const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
    dialogs: [
        { id: '1', name: 'Dimasik' },
        { id: '2', name: 'Tolya' },
        { id: '3', name: 'Sasha' },
        { id: '4', name: 'Lyosha' },
        { id: '5', name: 'Nikita' }
    ],

    messages: [
        { id: '1', message: 'Yo!' },
        { id: '2', message: 'How are you?' },
        { id: '3', message: 'Hello, dev!' },
        { id: '4', message: 'Ae!' },
        { id: '5', message: 'Yo yo!' }
    ]
}

const messagesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: action.message }],
                newMessageText: ''
            };

        default:
            return state;
    }
}

export const addMessageActionCreator = (message) => ({ type: ADD_MESSAGE, message })

export default messagesPageReducer;