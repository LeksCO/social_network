import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {  
  let postsElements = props.posts.map ((m) => {
    return (
      <Post message={m.message} like={m.likesCount} />
    )
  })

  let newPostElement = React.createRef()

  let onAddPost = () => {
    props.addPost();    
  }  

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updeteNewPostText(text)        
  }

  return (    
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <button onClick={ onAddPost } className="addPostButton">Add</button>
      </div>      
      {postsElements}
      <div className={s.posts}></div>
    </div>
  );
};

export default MyPosts;
