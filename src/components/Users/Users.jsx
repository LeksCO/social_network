import React from "react";
import s from"./Users.module.css";
import axios from "axios";
import usrePhoto from "../../assets/images/user.png"
let Users = (props) => {
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });
    }  
    return <div>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : usrePhoto } className={s.userPhoto}/>
                    </div>
                    <div>
                        { u.followed
                        ? <button onClick = {() => {props.unfollow(u.id)}}>Unfollow</button> 
                        : <button onClick = {() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                    <div>{u.followed}</div>
                </span>
                <span>
                    <span>                        
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>                        
                    </span>
                </span>

            </div>)
        }
        </div>    
}

export default Users