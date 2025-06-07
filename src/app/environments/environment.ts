import { initializeApp } from "firebase/app";

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCLHfkbKpISI_G8wNWn1PQzMEXkKYXczL8",
    authDomain: "marplusweb-bd300.firebaseapp.com",
    projectId: "marplusweb-bd300",
    storageBucket: "marplusweb-bd300.firebasestorage.app",
    messagingSenderId: "T898904994209",
    appId: "1:898904994209:web:c10a6bd6affc8790851be0"
  }
};
const app = initializeApp(environment.firebaseConfig);