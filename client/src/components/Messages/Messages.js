import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./Message.css";
import Message from "./Message";

export default function Messages({ messages, name }) {
  const messagesContainer = messages.map((message, index) => (
    <Message key={index} message={message} name={name} />
  ));

  console.log(messagesContainer);

  return (
    <ScrollToBottom className="messages">{messagesContainer}</ScrollToBottom>
  );
}

{
  /* <div
className={`messageContainer ${
  message.name !== name ? "left" : "right"
}`}
style={{ color: `${message.name === "admin" ? "#00ff00" : null}` }}
>
<div className="user">message.name</div>
<div className="message">message.text</div>
</div>
); */
}
