import axios from "axios";

const instance = axios.create({           
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY":"a2f1a583-49a3-406e-a13d-8ebe31786ad5"
        }    
})
export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 1) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
           )
            .then(response => {
                return response.data})
        },
    follow  (id)  {
   return instance.post(`follow/${id}`, {}, )
.then(response => {
    return response.data})
},
    unfollow  (id)  {
    return instance.delete(`follow/${id}`, )
 .then(response => {
     return response.data})
},
getProfile(userId){
    console.warn('Obsolete method. Please profileAPI object')
    return profileAPI.getProfile(userId) 
}
}
export const profileAPI = {   
getProfile(userId){
    return instance.get(`profile/` + userId);     
},
getStatus(userId){
    return instance.get(`status/` + userId); 
},
updateStatus(status){
    
    return instance.put(`status`, {status: status}); 
}
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
   
}