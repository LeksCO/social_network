import {combineReducers, legacy_createStore as createStore} from "redux"
import profileReaduser from "./profileReduser";
import dialogsReaduser from "./dialogsReduser";
import sidebarReaduser from "./sidebarReduser";

let redusers = combineReducers({
    profilePage : profileReaduser,
    dialogsPage : dialogsReaduser,
    sidebar : sidebarReaduser,
})

let store = createStore(redusers);
window.store = store;
export default store;