import React from "react";
import "./Header.css";

export default function Header({ room}) {
  return (
    <header className="chat__head">
      {room}
    </header>
  );
}
