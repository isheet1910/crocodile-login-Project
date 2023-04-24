import React from "react";
import image from "./image.jpg"

function ThirdScreen() {
  return (
    <div
      className="modal"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1,
      }}
    >
      <div
        className="modal-content"
        style={{
          backgroundColor: "white",
          borderRadius: "5px",
          padding: "20px",
          maxWidth: "80vw",
          maxHeight: "80vh",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#00c853"
          width="70px"
          height="70px"
          style={{ marginBottom: "20px" }}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M9 16.2l-3.6-3.6L4 14l5 5 10-10-1.4-1.4L9 16.2z" />
        </svg>
        <p style={{ margin: 0, fontSize: "24px" }}>Password Changed</p>
        <p style={{ marginTop: "20px" }}>
          Your password has been successfully changed!
        </p>
      </div>
    </div>
  );
}

export default ThirdScreen;
