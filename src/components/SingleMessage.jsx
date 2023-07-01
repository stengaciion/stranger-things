import React from "react";

export default function SingleMessage({ message }) {
  return (
    <div className="messageCard">
      <ul>
        <li className="messageSender">From: {message.fromUser.username}</li>
        <li className="messagePost">RE: {message.post.title}</li>
        <li className="messageBody">{message.content}</li>
      </ul>
    </div>
  );
}
