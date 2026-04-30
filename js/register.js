function loginUser() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let message = document.getElementById("message");
  let alertBox = document.getElementById("alertBox");

  // Kosong
  if (username === "" || password === "") {
    message.style.display = "block";
    message.innerText = "Username dan password wajib diisi!";
    return;
  }

  // Login sesuai guru
  if (username === "heri" && password === "123") {

    // Simpan username
    localStorage.setItem("username", username);

    // Tampilkan alert sukses
    alertBox.style.display = "block";
    alertBox.innerText = "Login berhasil!";

    // Pindah halaman
    setTimeout(() => {
      window.location.href = "profile.html";
    }, 1000);

  } else {
    message.style.display = "block";
    message.innerText = "Username atau password salah!";
  }
}
