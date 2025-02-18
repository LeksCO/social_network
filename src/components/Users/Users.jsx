import React from "react";
import s from"./Users.module.css";
import userPhoto from "../../assets/images/user.png"
import { NavLink } from "react-router-dom";
import axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);        
    
            let pages = [];
            for (let i=1; i <= pagesCount; i++) {
                pages.push(i);
            } 

    return <div> 
    <div>
        { pages.map( p => {
            return <span className={props.currentPage === p && s.selectedPage }
            onClick={(e) => { 
                props.onPageChanged(p);
            }}>{p}</span>
        })}
        </div>       
{
    props.users.map( u => <div key={u.id}>
        <span>
            <div>
                <NavLink to={'/profile/'+u.id}>                
                <img src={u.photos.small != null ? u.photos.small : userPhoto } className={s.userPhoto}/>
                </NavLink>
            </div>
            <div>
                { u.followed
                ? <button onClick = {() => {

                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                        withCredentials: true,
                        headers: {
                            "API-KEY":"a2f1a583-49a3-406e-a13d-8ebe31786ad5"
                        }
                    })
                        .then(response => {
                            if(response.data.resultCode == 0){
                                props.unfollow(u.id)
                            }
                        });

                }}>Unfollow</button> 

                : <button onClick = {() => {
                        
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                "API-KEY":"a2f1a583-49a3-406e-a13d-8ebe31786ad5"
                            }
                        })
                            .then(response => {
                                if(response.data.resultCode == 0){
                                    props.follow(u.id)
                                }
                            });
                    
                    }}>Follow</button>}
            </div>
            <div key={u.id}>{u.followed}</div>
        </span>
        <span>
            <span>                        
                <div key={u.id}>{u.name}</div>
                <div key={u.id}>{u.status}</div>
            </span>
            <span>
                <div key={u.id}>{"u.location.country"}</div>
                <div key={u.id}>{"u.location.city"}</div>                        
            </span>
        </span>

    </div>)
}
</div> 
}

export default Users