import React from "react";
import "./login.scss";
function Login() {
  return (
    <div>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Submit</button>
        <span>Wrong Email or Password</span>
      </form>
    </div>
  );
}

export default Login;
