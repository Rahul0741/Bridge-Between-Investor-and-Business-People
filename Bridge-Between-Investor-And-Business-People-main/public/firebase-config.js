import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCNzZ4qAzgC6oJZEWndWOth3vgiifnG6j0",
  authDomain: "investor-business-659b2.firebaseapp.com",
  databaseURL: "https://investor-business-659b2-default-rtdb.firebaseio.com",
  projectId: "investor-business-659b2",
  storageBucket: "investor-business-659b2.firebasestorage.app",
  messagingSenderId: "748892913281",
  appId: "1:748892913281:web:11b6c29c0dfb45786a5780",
  measurementId: "G-XHD663P5FE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
