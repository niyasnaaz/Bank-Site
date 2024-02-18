function deposit() {
    let amnt = parseInt(document.getElementById('depositAmnt').value);
    let acno = document.getElementById('depositAcno').value;
    
    if (acno in localStorage) {
        let accountDetails = JSON.parse(localStorage.getItem(acno));

        if (amnt <= 0) {
            alert('Amount cannot be empty or negative');
        } else {
            accountDetails.balance += amnt;
            localStorage.setItem(acno, JSON.stringify(accountDetails));

            alert("Amount deposited Successfully");
            document.getElementById("depositResult").innerHTML = '<div class="mt-4 text-danger text-center fs-3">Your Current Balance Is: ₹' + accountDetails.balance + '</div>';
        }
    } else {
        alert("Incorrect account no");
    }
}

function withdraw() {
    let amnt = parseInt(document.getElementById('withAmnt').value);
    let acno = document.getElementById('withAcno').value;

    if (acno in localStorage) {
        let accountDetails = JSON.parse(localStorage.getItem(acno));

        if (amnt <= 0) {
            alert("Amount cannot be empty or negative");
        } else if (amnt > accountDetails.balance) {
            alert("Insufficient Balance!");
        } else {
            alert('Bank Balance before Withdrawal: ' + accountDetails.balance);

            alert('Withdrawal Amount: ' + amnt);

            accountDetails.balance -= amnt;
            alert('Your Amount is Successfully Withdrawn');
            localStorage.setItem(acno, JSON.stringify(accountDetails));

            alert('Current Balance after Withdrawal: ' + accountDetails.balance);
            document.getElementById("withdrawResult").innerHTML = '<div class="mt-4 text-danger text-center fs-3">Your Current Balance After Withdrawal Is: ₹' + accountDetails.balance + '</div>';
        }
    } else {
        alert('Incorrect account no');
    }
}

function logout() {
    window.location = './main.html';
}
