// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2ytcszZHkbD8SEdVr4yqFe-9GCQvsUyw",
  authDomain: "fir-proj-react.firebaseapp.com",
  projectId: "fir-proj-react",
  storageBucket: "fir-proj-react.appspot.com",
  messagingSenderId: "816296631532",
  appId: "1:816296631532:web:2af7377bf5ab9a623a59c9" ,
  databaseURL : "https://fir-proj-react-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);