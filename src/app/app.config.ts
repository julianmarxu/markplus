import { ApplicationConfig } from '@angular/core';
import { provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideRouter } from '@angular/router';
import { initializeApp } from "firebase/app";
import { routes } from './app.routes';
import { environment } from './environments/environment';
const firebaseconfig = {
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
initializeApp(firebaseconfig.firebaseConfig);
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
  ]
};
