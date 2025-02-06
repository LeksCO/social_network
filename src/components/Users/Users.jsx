import React from "react";
import s from"./Users.module.css"
let Users = (props) => {
    if (props.users.lenght === 0) {
    props.setUsers( [
        { id: 1, photoUrl:"https://avatars.mds.yandex.net/i?id=ac5dc23bebc784cc695efd419cb41f11ffc78774-7716469-images-thumbs&n=13", followed: true, fullname: "Aleksey", status: "I'm the BOSS of the boss",location: {city: "Azov", country: "Russia"}},
        { id: 2, photoUrl:"https://avatars.mds.yandex.net/i?id=455a674be6206399095149572e3544963307bc91-4079110-images-thumbs&n=13",followed: true, fullname: "Anna", status: "I'm the Cool",location: {city: "Azov", country: "Russia"}},
        { id: 3, photoUrl:"https://avatars.mds.yandex.net/i?id=ec1fe8b6402abb88b8b86979ee8f4ca16a1a6ad15cb7b610-4577377-images-thumbs&n=13",followed: false, fullname: "Aleksandr", status: "I'm the boss",location: {city: "St. Petersburg", country: "Russia"}}
      ])}

    return <div>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto}/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>                        
                    </span>
                </span>

            </div>)
        }
        </div>    
}

export default Users