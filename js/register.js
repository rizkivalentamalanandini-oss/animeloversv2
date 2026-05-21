function loginUser() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let message = document.getElementById("message");
  let alertBox = document.getElementById("alertBox");

  if (username === "" || password === "") {
    message.style.display = "block";
    message.innerText = "Username dan password wajib diisi!";
    return;
  }

  if (username === "heri" && password === "123")
  if (username === "valent" && password === "123") {

    localStorage.setItem("username", username);

    alertBox.style.display = "block";
    alertBox.innerText = "Login berhasil!";

    setTimeout(() => {
      window.location.href = "profile.html";
    }, 1000);

  } else {
    message.style.display = "block";
    message.innerText = "Username atau password salah!";
  }
}
