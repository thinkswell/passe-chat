import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header({ room }) {
  return (
    <header className="chat__head">
      {room}
      <Link to="/">
        <div className="chat__head--cross">X</div>
      </Link>
    </header>
  );
}
