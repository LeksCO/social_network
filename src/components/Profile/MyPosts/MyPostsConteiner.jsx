import {addPostActionCreator , updeteNewPostTextActionCreater} from "../../../redux/profileReduser"
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
return {
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText
}
}
const mapDispatchToProps = (dispatch) => {
  return {
    updeteNewPostText: (text) => {
      let action = updeteNewPostTextActionCreater(text)
      dispatch(action); 
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    } 
  }
  }

const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsConteiner;
