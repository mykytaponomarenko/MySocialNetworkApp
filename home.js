// Get the username from the URL query parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const username = urlParams.get('username');

// Set the username in the HTML
const usernameElement = document.getElementById('username');
usernameElement.innerText = username;
