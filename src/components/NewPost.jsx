import React, { useState } from "react";
import { createPost } from "api/posts";
import { useNavigate } from "react-router-dom";

export default function NewPost({ token }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("[On Request]");
  const [willDeliver, setWillDeliver] = useState(false);

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    createPost(token, {
      title,
      description,
      price,
      location,
      willDeliver,
    });
    navigate("/");
  };

  return (
    <div className="newPost">
      <h3>New Post</h3>
      <form className="postForm" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        ></input>
        <label htmlFor="description">Description:</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        ></input>
        <label htmlFor="location">Location:</label>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        ></input>
        <label htmlFor="price">Price:</label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        ></input>
        <div className="delivery">
          <label htmlFor="willDeliver">Will Deliver?</label>
          <input
            value={willDeliver}
            onChange={(e) => setWillDeliver(e.target.checked)}
            type="checkbox"
          ></input>
        </div>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
