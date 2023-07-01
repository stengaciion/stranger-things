import {
  Home,
  LogIn,
  Profile,
  NavBar,
  Register,
  NewPost,
  EditPost,
  Message,
  PostCard,
} from "components";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchMe } from "api/users";

export default function App() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState("");
  const [targetPost, setTargetPost] = useState({});

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");

    async function getMe() {
      const result = await fetchMe(localStorageToken);
      setCurrentUser(result.data.user.username);
      setToken(localStorageToken);
    }
    if (localStorageToken) {
      getMe();
    }
  }, [token]);

  return (
    <>
      <NavBar
        token={token}
        setToken={setToken}
        setCurrentUser={setCurrentUser}
      />
      <Routes>
        <Route
          path="/"
          element={<Home token={token} setTargetPost={setTargetPost} />}
        />
        <Route
          path="/LogIn"
          element={
            <LogIn setToken={setToken} setCurrentUser={setCurrentUser} />
          }
        />
        <Route
          path="/Profile"
          element={
            <Profile
              token={token}
              currentUser={currentUser}
              setTargetPost={setTargetPost}
            />
          }
        />
        <Route
          path="/Register"
          element={
            <Register setToken={setToken} setCurrentUser={setCurrentUser} />
          }
        />
        <Route path="/NewPost" element={<NewPost token={token} />} />
        <Route
          path="/EditPost"
          element={
            <EditPost
              token={token}
              targetPost={targetPost}
              setTargetPost={setTargetPost}
            />
          }
        />
        <Route
          path="/Message"
          element={
            <Message
              token={token}
              targetPost={targetPost}
              setTargetPost={setTargetPost}
            />
          }
        />
        <Route
          path="/posts/:_id"
          element={
            <PostCard
              token={token}
              post={targetPost}
              setTargetPost={setTargetPost}
            />
          }
        />
      </Routes>
    </>
  );
}
