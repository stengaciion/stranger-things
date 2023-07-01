import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { messagePost } from "api/posts";

export default function Message({ token, targetPost, setTargetPost }) {
  let navigate = useNavigate();
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    messagePost(token, targetPost, message);
    setTargetPost({});
    navigate("/Profile");
  };

  return (
    <div className="newPost">
      <h3>New Message</h3>
      <h3>RE: {targetPost.title}</h3>
      <form className="postForm" onSubmit={handleSubmit}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message here!"
        ></input>
        <button type="submit" className="submit">
          Submit Message!
        </button>
      </form>
    </div>
  );
}
