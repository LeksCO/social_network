import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css'; 
import App from './App'; 
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {     
root.render(
    <BrowserRouter> 
    <Provider store = {store}>
    <App/> 
    </Provider>
    </BrowserRouter>  
    );
   
}
renderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
});
reportWebVitals();