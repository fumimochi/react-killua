const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Dimych'}, 
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'}
    ],
    messagesData: [
        {id: 1, message: 'Hi'}, 
        {id: 2, message: "How you doin'?"},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]
} 

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case SEND_MESSAGE: 
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body }]
            };       
        default: 
            return state;
    }
} 

export const sendMessageActionCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;