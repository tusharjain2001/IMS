function loginform() {
  let user = document.getElementById("text1").value;
  let pass = document.getElementById("text2").value;
  if (user == "admin" && pass == "12345") {
    location.href = "index.html";
  } else {
    location.href = "login.html";
    alert("Wrong Credentials!");
  }
}
