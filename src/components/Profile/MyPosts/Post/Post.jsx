import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://avatars.mds.yandex.net/i?id=0edf4a78e11cddd90810fdea0bf05e32b89a65ad-7755864-images-thumbs&n=13"></img>
      {props.message}
      <div>
        <span>💗 {props.like}</span>
      </div>
    </div>
  );
};

export default Post;
