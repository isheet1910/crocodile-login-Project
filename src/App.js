import React from "react";
import SignIn from "./SignIn";
import ForgotPassword from "./ForgotPassword";
import PageFooter from "./PageFooter";

function App() {
  const [showForgotPassword, setShowForgotPassword] = React.useState(false);

  function handleForgotPassword() {
    setShowForgotPassword(true);
  }

  function handleBack() {
    setShowForgotPassword(false);
  }

  return (
    <div>
      {showForgotPassword ? (
        <div>
          <ForgotPassword />
        </div>
      ) : (
        <div>
          <SignIn onForgotPassword={handleForgotPassword} />
        </div>
      )}
      <PageFooter />
    </div>
  );
}

export default App;
