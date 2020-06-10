import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./Message.css";
import Message from "./Message";

export default function Messages({ messages, name }) {
  const messagesContainer = messages.map((message, index) => (
    <Message key={index} message={message} name={name} />
  ));

  return (
    <ScrollToBottom className="messages">{messagesContainer}</ScrollToBottom>
  );
}
