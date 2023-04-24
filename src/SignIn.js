import React from "react";
import "./SignIn.css";
import image from "./image.jpg"

function SignIn(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleClick() {
    if (!username || !password) {
      alert("Username and password cannot be blank");
      return;
    }

    if (username !== "mockuser@crocodilesolutions.com" || password !== "MockPassword123") {
      alert("Invalid username or password");
      return;
    }

    const popup = window.open("", "Authenticated", "height=200,width=300");
    popup.document.write("<p>Login is authenticated</p>");
  }

  return (
    <>
    <div className="signin-container">
      <img id = "headimage" src={image} />
      <h2>Sign In</h2>
      <form>
        <div className="input-container">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="button" onClick={handleClick}>
          Login
        </button>
        <a href="#" onClick={props.onForgotPassword}>
          Forgot password?
        </a>
      </form>
    </div>
    </>
  );
}

export default SignIn;
