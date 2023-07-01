import React from "react";
import { useState, useEffect } from "react";
import { fetchPosts } from "api/posts";
import PostCard from "./SinglePost";

export default function Home({ token, setTargetPost }) {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const getPosts = async () => {
      const result = await fetchPosts(token);
      setPosts(result);
    };
    getPosts();
  }, [token]);

  function postMatches(post, text) {
    if (post.title.toLowerCase().includes(text)) {
      return true;
    } else if (post.location?.toLowerCase().includes(text)) {
      return true;
    } else if (post.description?.toLowerCase().includes(text)) {
      return true;
    } else if (post.author?.username.toLowerCase().includes(text)) {
      return true;
    } else if (post.price?.toLowerCase().includes(text)) {
      return true;
    } else {
      return false;
    }
  }

  const filteredPosts = posts.filter((post) =>
    postMatches(post, searchTerm.toLowerCase())
  );
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;

  return (
    <div>
      <form className="searchBar">
        <input
          value={searchTerm}
          placeholder="search here!"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      {postsToDisplay.map((post, index) => {
        return (
          <PostCard
            key={`Key: ${index}`}
            post={post}
            token={token}
            setTargetPost={setTargetPost}
          />
        );
      })}
    </div>
  );
}
