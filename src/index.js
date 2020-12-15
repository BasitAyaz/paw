import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase'





var firebaseConfig = {
  apiKey: "AIzaSyCFPK01XcrMy8j1hO4Gg_S-jWe2SCeE4NE",
  authDomain: "newchat-622a3.firebaseapp.com",
  databaseURL: "https://newchat-622a3.firebaseio.com",
  projectId: "newchat-622a3",
  storageBucket: "newchat-622a3.appspot.com",
  messagingSenderId: "65370138070",
  appId: "1:65370138070:web:752b1564d6d4d5a60cf077"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
