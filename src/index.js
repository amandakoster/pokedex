import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
var firebase = require("firebase");
import * as firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAiPCSBoUiwTsMw1crilOE5PANkP9DHM_g",
    authDomain: "pokedex-f9a50.firebaseapp.com",
    databaseURL: "https://pokedex-f9a50.firebaseio.com",
    projectId: "pokedex-f9a50",
    storageBucket: "pokedex-f9a50.appspot.com",
    messagingSenderId: "577463132239"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
