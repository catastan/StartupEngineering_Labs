/**
 * Implement the fetch functions to call the Typicode API
 *
 * More info on the api here - https://jsonplaceholder.typicode.com/
 */

const API_URL = "https://jsonplaceholder.typicode.com";

function getAllPosts() {
  // TODO:
  return fetch(`${API_URL}/posts`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

function getPost(postId) {
  // TODO:
  return fetch(`${API_URL}/posts/${postId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

function newPost(title = "New post", body = "My new post") {
  // TODO:
  const postData = {
    title,
    body,
    userId: 1,
  };

  return fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

function editPost(postId, title = "Updated title", body = "Updated body") {
  // TODO:
  const updatedData = {
    title,
    body,
    userId: 1,
  };

  return fetch(`${API_URL}/posts/${postId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

function deletePost(postId) {
  // TODO:
  return fetch(`${API_URL}/posts/${postId}`, { method: "DELETE" })
    .then((response) => {
      if (!response.ok) throw new Error("Failed to delete post");
      console.log(`Post ${postId} deleted`);
      return { message: `Post ${postId} deleted` };
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
}
