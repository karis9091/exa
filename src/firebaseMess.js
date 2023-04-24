// import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';
// import 'firebase/app';
// import 'firebase/messaging';


const firebaseConfig = {
     apiKey: "AIzaSyAmkFbtxe86EOAmKseorQZ-wwk6mvisMzc",
  authDomain: "clima-136ab.firebaseapp.com",
  projectId: "clima-136ab",
  storageBucket: "clima-136ab.appspot.com",
  messagingSenderId: "317827091634",
  appId: "1:317827091634:web:83d176364e65b5ed1a4dab"
    
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
    messaging.onBackgroundMessage(payload=> {
        console.log("recibiste un mensaje")
        console.log(payload);
        const notificationTitle = payload.notification.title;
        const notificationOptions = {
            body: payload.notifications.body,
            icon:"./assets/pp.png"
        };
        return self.ServiceWorkerRegistration.showNotification(
            notificationTitle,
            notificationOptions
        );
    })
