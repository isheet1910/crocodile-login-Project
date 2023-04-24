import React from "react";
import ThirdScreen from "./ThirdScreen";
import "./SignIn.css";
import image from "./image.jpg"

function ForgotPassword() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showThirdScreen, setShowThirdScreen] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // validate email and password
    const isPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);
    if (!isPasswordValid) {
      alert(
        "Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
      );
      return;
    }

    // if valid, show the third screen
    setShowThirdScreen(true);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
    setPasswordError("");
  }

  function handleBack() {
    // reset the form and hide the third screen
    setEmail("");
    setPassword("");
    setPasswordError("");
    setShowThirdScreen(false);
  }

  function handleNewPassword(){

  }

  return (
    <div className="signin-container">
      <img id = "headimage" src={image} />
      <h2>Reset Password</h2>
      {showThirdScreen ? (
        <ThirdScreen />
      ) : (
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username:</label>
            <input type="email" value={email} onChange={handleChangeEmail} />
          </div>
          <div className="input-container">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handleChangePassword}
            />
            {passwordError && <p>{passwordError}</p>}
          </div>
          <button onclick={handleNewPassword} type="submit">Change</button>
        </form>
      )}
    </div>
  );
}

export default ForgotPassword;
