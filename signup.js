function login(){
    var username = document.getElementById("uname");
    var accountno = document.getElementById("accno");
    var password = document.getElementById("pswrd");

    var account = {
        username: username.value,
        accountno: accountno.value,
        password: password.value,
        balance: 0
    };

    if (username.value === "" || accountno.value === "" || password.value === "") {
        alert("Please enter all fields");
    } else {
        if (localStorage.getItem(accountno.value)) {

            alert("Account already exists!!!");
        } else {
            localStorage.setItem(account.accountno, JSON.stringify(account));
            alert("Account Created successfully");

            window.location.href = "./login.html";
        }
    }
}