import {combineReducers, legacy_createStore as createStore} from "redux"
import profileReaduser from "./profileReduser";
import dialogsReaduser from "./dialogsReduser";
import sidebarReaduser from "./sidebarReduser";
import usersReaduser from "./usersReaduser";

let redusers = combineReducers({
    profilePage : profileReaduser,
    dialogsPage : dialogsReaduser,
    sidebar : sidebarReaduser,
    usersPage: usersReaduser,
})

let store = createStore(redusers);
window.store = store;
export default store;