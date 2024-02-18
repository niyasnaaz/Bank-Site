function loginPageLogin() {
  acno = document.getElementById("uname").value;
  paswrd = document.getElementById("pswrd").value;

  if (acno === "" || paswrd === "") {
      alert("Please Enter all fields..");
  } else {
      if (localStorage.getItem(acno)) {
          account = JSON.parse(localStorage.getItem(acno));
          if (paswrd === account.password) {
              alert("Login Successful");
              window.location = "./bank.html";
              document.getElementById("uname").value = "";
              document.getElementById("pswrd").value = "";
          } else {
              alert("Incorrect Password!!!");
          }
      } else {
          alert("Invalid Account Number!!");
      }
  }
}