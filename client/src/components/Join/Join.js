import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

export default function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="join">
      <header className="join__head">Join</header>
      <div className="join__body">
        <label className="join__body--label">
          <input
            type="text"
            className="join__body--input"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="join__body--label">
          <input
            type="text"
            className="join__body--input"
            placeholder="Room Name"
            onChange={(e) => setRoom(e.target.value)}
          />
        </label>
      </div>
      <Link to={`/chat?name=${name}&room=${room}`}>
        <button className="join__btn">Sign In</button>
      </Link>
    </div>
  );
}
