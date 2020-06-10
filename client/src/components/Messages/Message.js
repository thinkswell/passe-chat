import React from "react";

export default function Message({ message, name }) {
  return (
    <React.Fragment>
      <div
        className={`messageContainer ${
          message.name === name ? "right" : "left"
        }`}
      >
        <div
          className="user"
          style={{ color: message.name === "admin" ? "#00ff00" : null }}
        >
          {message.name}
        </div>
        <div className="message">{message.text}</div>
      </div>
    </React.Fragment>
  );
}
