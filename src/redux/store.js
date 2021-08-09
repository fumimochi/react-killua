import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sitebarReducer from './sitebar-reducer';

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likeCount: 12}, 
                {id: 2, message: "It's my first post", likeCount: 10},
                {id: 3, message: 'What else to say...', likeCount: 0}, 
                {id: 4, message: "Nothing to say", likeCount: 38}
            ],
            newPostText: 'it-takamustra.com'
        },
        dialogsPage: {
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
            ],
            newMessageBody: ""
        },
        sitebar: {
            friendsData: [
                {id: 1, name: 'Andrew'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Kirill'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State was changed');
    },

    
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) { // { type: 'ADD-POST' }

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sitebar = sitebarReducer(this._state.sitebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
