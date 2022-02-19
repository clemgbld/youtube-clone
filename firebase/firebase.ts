import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";

let app: FirebaseApp;

const firebaseConfig = {
  apiKey: "AIzaSyA2WpKW0BlIfzbP90QFQm0a_-6HYRPLSkY",
  authDomain: "fir-552cc.firebaseapp.com",
  projectId: "fir-552cc",
  storageBucket: "fir-552cc.appspot.com",
  messagingSenderId: "547175180322",
  appId: "1:547175180322:web:bc68a526301e445d75427b",
};

// Initialize Firebase
if (getApps().length) {
  app = getApp();
} else {
  app = initializeApp(firebaseConfig);
}

export default app;
