import {initializeApp} from 'firebase/app'
import {getAnalytics} from 'firebase/analytics'
export const firebaseConfig = {

    apiKey: "AIzaSyBrhBZD8DrsC5A1Ra4x0zXhJAKn_TT3ZFM",
  
    authDomain: "news-triveous.firebaseapp.com",
  
    projectId: "news-triveous",
  
    storageBucket: "news-triveous.appspot.com",
  
    messagingSenderId: "729427566691",
  
    appId: "1:729427566691:web:64258d08a03a7648691856",
  
    measurementId: "G-TDNG6VNC7N",
    
    databaseURL: "https://news-triveous-default-rtdb.firebaseio.com/"
  };
const app= initializeApp(firebaseConfig)
const analytics = getAnalytics(app);
export{app, analytics}