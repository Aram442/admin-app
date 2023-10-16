import React, { useState } from "react";
import "./login.scss";
function Login() {
  const [error, setError] = useState(false);
  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Submit</button>
        {error && <span>Wrong Email or Password</span>}
        {/* if Have Error Show this Span */}
      </form>
    </div>
  );
}

export default Login;
