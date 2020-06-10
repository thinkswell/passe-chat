import React, { useEffect, useState } from "react";
import "./Chat.css";
import qs from "querystringify";
import io from "socket.io-client";
import Header from "./../Header/Header";
import Message from "../Messages/Messages";

let socket;

export default function Chat({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // const ENDPOINT = "https://passe-chat.herokuapp.com/";
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = qs.parse(location.search);

    setName(name);
    setRoom(room);

    socket = io(ENDPOINT);

    socket.emit("join", { room, name });

    return () => {
      socket.emit("disconnect", { room, name });

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };

  return (
    <div className="chat">
      <Header room={room} />
      <Message messages={[...messages]} name={name} />
      <label className="chat__label">
        <input
          className="chat__label--input"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
          autoFocus
        />
        <button className="chat__label--btn" onClick={sendMessage}>
          Send
        </button>
      </label>
    </div>
  );
}
