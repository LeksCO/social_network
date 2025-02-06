const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts : [
    { id: 1, message: "Hi, how are you?", likesCount: "15" },
    { id: 2, message: "Its my first post", likesCount: "21" },
    { id: 3, message: "bla bla", likesCount: "20" },
    { id: 4, message: "Its", likesCount: "1" },
  ],
newPostText: ''}



const profileReaduser = (state = initialState, action) => {
    switch(action.type){
    case ADD_POST: {
        let newPost = {
          id:5,
          message: state.newPostText,
          likesCount: 0,
        };
        return {
          ...state,
          posts : [...state.posts, newPost],
          newPostText : ''
        };   
      }     
        case  UPDATE_NEW_POST_TEXT: {
          return {
            ...state,
            newPostText: action.newText
          }            
          }
            default:
                return state;
        } 
    }
export default profileReaduser;

export const addPostActionCreator = () => ({type: ADD_POST})
export const updeteNewPostTextActionCreater = (text) => ({  
    type: UPDATE_NEW_POST_TEXT,newText:text})