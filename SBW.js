
let balance = 0;

function updateBalance() {
    document.getElementById("balance").innerText = balance;
}

function addMoney(amount) {
    balance += amount;
    updateBalance();
    showMessage("₹" + amount + " added successfully!", "green");
}

function withdrawMoney() {
    let amount = parseInt(document.getElementById("withdrawAmount").value);

    if (isNaN(amount) || amount <= 0) {
        showMessage("Enter a valid amount!", "orange");
        return;
    }

    if (amount > balance) {
        showMessage("Insufficient Balance!", "red");
    } else {
        balance -= amount;
        updateBalance();
        showMessage("₹" + amount + " withdrawn successfully!", "green");
    }

    document.getElementById("withdrawAmount").value = "";
}

function showMessage(msg, color) {
    let messageDiv = document.getElementById("message");
    messageDiv.innerText = msg;
    messageDiv.style.color = color;
}