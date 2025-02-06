const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts : [
    { messageId: 1, message: "Hi, how are you?", likesCount: "15" },
    { messageId: 2, message: "Its my first post", likesCount: "21" },
    { messageId: 3, message: "bla bla", likesCount: "20" },
    { messageId: 4, message: "Its", likesCount: "1" },
  ],
newPostText: ''}



const profileReaduser = (state = initialState, action) => {
    switch(action.type){    
            default:
                return state;
        } 
    }
export default profileReaduser;

export const addPostActionCreator = () => ({type: ADD_POST})
export const updeteNewPostTextActionCreater = (text) => ({  
    type: UPDATE_NEW_POST_TEXT,newText:text})