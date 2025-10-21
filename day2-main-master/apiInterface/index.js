/**
 * Implement the functions to make the UI interactive.
 *
 * The functions from the previous task are already loaded
 *
 * More info on the api here - https://jsonplaceholder.typicode.com/
 */

function showResponse(data) {
  const responseDiv = document.querySelector(".response");
  responseDiv.textContent = JSON.stringify(data, null, 2);
}

/**
 * Handler for Get button
 */
async function getPosts() {
  // TODO:
  // use getAllPosts() function from api.js
  // and display the results in the console

  try {
    const data = await getAllPosts();
    showResponse(data.slice(0, 3));
  } catch (err) {
    showResponse(err);
  }
}

/**
 * Handler for add button
 */
async function addPost() {
  const postTitle = prompt("What is the post title ?");
  const postText = prompt("What is the post text ?");

  // TODO:
  try {
    const data = await newPost(postTitle, postText);
    showResponse(data);
  } catch (err) {
    showResponse(err);
  }
}

/**
 * Handler for edit button
 */
async function editPost1() {
  const postId = prompt("What is the id of the post you want to edit ?");

  // TODO:
  const title = prompt("New title?");
  const body = prompt("New body?");

  try {
    const data = await editPost(postId, title, body);
    showResponse(data);
  } catch (err) {
    showResponse(err);
  }
}

/**
 * Handler for delete button
 */
async function deletePost1() {
  const postId = prompt("What is the id of the post you want to delete ?");

  // TODO:
  try {
    const data = await deletePost(postId);
    showResponse(data);
  } catch (err) {
    showResponse(err);
  }
}

/**
 * Assigns events to buttons
 */
function assignEvents() {
  const getButton = document.querySelector("button.get");
  const addButton = document.querySelector("button.add");
  const editButton = document.querySelector("button.edit");
  const deleteButton = document.querySelector("button.delete");

  getButton.addEventListener("click", getPosts);
  addButton.addEventListener("click", addPost);
  editButton.addEventListener("click", editPost1);
  deleteButton.addEventListener("click", deletePost1);
}

document.addEventListener("DOMContentLoaded", assignEvents);
