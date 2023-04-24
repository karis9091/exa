// import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';
// import 'firebase/app';
// import 'firebase/messaging';


const firebaseConfig = {
    apiKey: "AIzaSyCKr9ix19zusJE-OUYMzGMBHf4oDtfUIqA",
    authDomain: "climapwa-61202.firebaseapp.com",
    projectId: "climapwa-61202",
    storageBucket: "climapwa-61202.appspot.com",
    messagingSenderId: "452884069417",
    appId: "1:452884069417:web:7bc1621f0907de9fb53038"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export default messaging;
// export {app};
