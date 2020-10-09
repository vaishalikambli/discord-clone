import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import React from "react";

import "../Login/Login.css";

function Login() {
  const signIn = () => {
    // do clever google login
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/9/98/Discord_logo.svg"
          alt="Discord logo"
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
