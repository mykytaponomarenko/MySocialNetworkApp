const usernameCreationBtn = document.getElementById("usernameCreation-btn");
const usernameCreationInput = document.getElementById("usernameCreation");

usernameCreationBtn.addEventListener("click", function() {
  if (usernameCreationInput.value === "") {
    alert("Please enter a username");
  } else {
    const username = usernameCreationInput.value;
    window.location.href = `home.html?username=${username}`;
  }
});
