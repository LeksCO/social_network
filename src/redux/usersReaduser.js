const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

let initialState = {
    users : [
    { id: 1, photoUrl:"https://avatars.mds.yandex.net/i?id=ac5dc23bebc784cc695efd419cb41f11ffc78774-7716469-images-thumbs&n=13", followed: true, fullname: "Aleksey", status: "I'm the BOSS of the boss",location: {city: "Azov", country: "Russia"}},
    { id: 2, photoUrl:"https://avatars.mds.yandex.net/i?id=455a674be6206399095149572e3544963307bc91-4079110-images-thumbs&n=13",followed: true, fullname: "Anna", status: "I'm the Cool",location: {city: "Azov", country: "Russia"}},
    { id: 3, photoUrl:"https://avatars.mds.yandex.net/i?id=ec1fe8b6402abb88b8b86979ee8f4ca16a1a6ad15cb7b610-4577377-images-thumbs&n=13",followed: false, fullname: "Aleksandr", status: "I'm the boss",location: {city: "St. Petersburg", country: "Russia"}}
  ],}

const usersReaduser = (state = initialState, action) => {
    switch(action.type){ 
        case FOLLOW:
            return { 
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
             return { 
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: [ ...state.users, ...action.users ]}
        }

            default:
                return state;
        } 
    }
export default usersReaduser;

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
