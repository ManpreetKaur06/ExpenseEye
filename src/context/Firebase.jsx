import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

const FireBaseContext = createContext(null);

export const useFirebase = () => useContext(FireBaseContext);

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


export const FireBaseProvider = (props) => {
    return <FireBaseContext.Provider>
        {props.children}
    </FireBaseContext.Provider>
}

