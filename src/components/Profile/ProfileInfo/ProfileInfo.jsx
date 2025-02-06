import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (  
    <div>  
      <div>
        <img src="https://avatars.mds.yandex.net/i?id=3f7b64adc36c27b5f0b616bcc977a4c0812a97ff-11924985-images-thumbs&n=13"></img>
      </div>
      <div className={s.descriptionBlock}>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
