import { profileAPI, } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'


let initialState = {
    posts : [
    { id: 1, message: "Hi, how are you?", likesCount: "15" },
    { id: 2, message: "Its my first post", likesCount: "21" },
    { id: 3, message: "bla bla", likesCount: "20" },
    { id: 4, message: "Its", likesCount: "1" },
  ],
newPostText: '',
profile: null,
status: ''}



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
        case  SET_USER_PROFILE: {
          return {...state, profile: action.profile}            
          }
        case  SET_STATUS: {
          return {...state, status: action.status}            
          }
            default:
                return state;
        } 
    }
export default profileReaduser;

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then(response => {
                  dispatch(setUserProfile(response.data));
              });
}
export const getStatus = (userId) => (dispatch) => {
   profileAPI.getStatus(userId).then(response => {
                  dispatch(setStatus(response.data));
              });
}
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(updateStatus(status))
    }
                 ;
             });
}
export const updeteNewPostTextActionCreater = (text) => ({  
    type: UPDATE_NEW_POST_TEXT,newText:text})