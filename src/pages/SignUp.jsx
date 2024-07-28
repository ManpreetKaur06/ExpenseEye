import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword , GoogleAuthProvider , signInWithPopup } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Success")
    );
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth , googleProvider);
  }

  return (
    <div className="signup-page">
        <h1>SignUp </h1>
      <label>Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="Enter your email here"
      />
      <label>Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="Enter Pasword here"
      />
      <button onClick={createUser}>SignUp</button>
      <button onClick={signupWithGoogle}>Sign with google</button>
      
    </div>
  );
}
