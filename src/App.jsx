import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Route , Routes } from "react-router-dom";
// import { getDatabase, ref, set } from "firebase/database";

//pages
import 
function App() {
  return (

      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/login" element={<h1>Login</h1>}/>

      </Routes>
  )
}

export default App;
