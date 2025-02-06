import dialogsReaduser from "./dialogsReduser"
import profileReaduser from "./profileReduser"
import sidebarReaduser from "./sidebarReduser"

let store = {
  _state : {
    profilePage:{
    posts : [
    { messageId: 1, message: "Hi, how are you?", likesCount: "15" },
    { messageId: 2, message: "Its my first post", likesCount: "21" },
    { messageId: 3, message: "bla bla", likesCount: "20" },
    { messageId: 4, message: "Its", likesCount: "1" },
  ],
    newPostText: ''},
    dialogsPage:{
      dialogs : [
        { id: 1, name: "Саша", ava: "https://avatars.mds.yandex.net/i?id=33b9018936c2e99e592032253152660e48a51e5f-9985849-images-thumbs&n=13" },
        { id: 2, name: "Дима", ava:  "https://avatars.mds.yandex.net/i?id=e5dc18fa233a3b9e8a65a795cfc6695c5d20b037-10845048-images-thumbs&n=13"},
        { id: 3, name: "Маша", ava: "https://avatars.mds.yandex.net/i?id=6cfafaebf9b0ae27ee16a3c44a0798f52d430a4a-11476564-images-thumbs&n=13"},
        { id: 4, name: "Света", ava: "https://avatars.mds.yandex.net/i?id=1cb6111179646a5942d89a91006c013c6fce2954-4570212-images-thumbs&n=13" },
        { id: 5, name: "Таня", ava: "https://avatars.mds.yandex.net/i?id=542b4b77c417f42f0b9a9a917ce752780e702d01-5390839-images-thumbs&n=13" },
        { id: 6, name: "Оля" , ava: "https://avatars.mds.yandex.net/i?id=3b9b3d4f0464882fec1258d1eee68afdca5b3c351e6681e8-12323207-images-thumbs&n=13"},
      ],
      messages : [
        { messageId: 1, message: "Hi" },
        { messageId: 2, message: "How is your" },
        { messageId: 3, message: "yo" },
      ],
      newMessageBody: ''
},
    sidebar: {}
},
  _callSubscriber() {
    console.log("state was changed")
  },  
  getState(){
    return this._state;
  },  
  subscribe(observer) {
    this._callSubscriber = observer; //Паттерн нужно изучить
  },  
  dispatch(action) { //{type: 'ADD-POST'}
    this._state.profilePage = profileReaduser(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReaduser(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReaduser(this._state.sidebar, action); 
    this._callSubscriber(this._state);   
  }, 
  
}
    
export default store;
window.store = store;