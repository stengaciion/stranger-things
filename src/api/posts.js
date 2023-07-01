const url = "https://strangers-things.herokuapp.com/api/2303-ftb-mt-web-pt";

export const fetchPosts = async (token) => {
  const response = await fetch(`${url}/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result.data.posts;
};

export const createPost = async (token, post) => {
  const response = await fetch(`${url}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: post.title,
        description: post.description,
        price: post.price,
        location: post.location,
        willDeliver: post.willDeliver,
      },
    }),
  });

  const result = await response.json();
  return result;
};

export const deletePost = async (token, post) => {
  fetch(`${url}/posts/${post._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const editPost = async (token, post) => {
  fetch(`${url}/posts/${post.postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: post.title,
        description: post.description,
        price: post.price,
        location: post.location,
        willDeliver: post.willDeliver,
      },
    }),
  });
};

export const messagePost = async (token, post, message) => {
  fetch(`${url}/posts/${post._id}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      message: {
        content: message,
      },
    }),
  });
};

export const fetchProfile = async (token) => {
  const response = await fetch(`${url}/users/me`, {
    method: "GET",
    headers: {
      "content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
};
