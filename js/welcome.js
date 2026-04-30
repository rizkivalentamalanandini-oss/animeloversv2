window.onload = function() {
  let username = localStorage.getItem("username");

  if (username) {
    let profileName = document.getElementById("profile-name");

    if (profileName) {
      profileName.innerText = username;
    }
  }
}
