
let balance = 10000;
let correctPIN = "1234";

console.log("Welcome to ATM Simulation App");
console.log("Starting Balance: Rs.", balance);

function verifyPIN() {
    let pin = prompt("Enter your 4-digit ATM PIN:");

    if (pin === correctPIN) {
        console.log("PIN Verified Successfully!");
        return true;
    } else {
        alert("Incorrect PIN!");
        console.log("Incorrect PIN entered!");
        return false;
    }
}

// Check Balance
function checkBalance() {
    if (!verifyPIN()) return;

    document.getElementById("message").innerHTML =
        "Your current balance is Rs. " + balance;

    document.getElementById("balance").innerHTML =
        "Balance: Rs. " + balance;

    console.log("Balance Checked: Rs.", balance);
}

// Deposit Money
function depositMoney() {
    if (!verifyPIN()) return;

    let amount = Number(prompt("Enter deposit amount:"));

    if (amount > 0 && Number.isFinite(amount)) {
        balance += amount;

        document.getElementById("message").innerHTML =
            "Rs. " + amount + " Deposited Successfully!";

        document.getElementById("balance").innerHTML =
            "Balance: Rs. " + balance;

        console.log("Deposited: Rs.", amount);
        console.log("New Balance: Rs.", balance);

        alert("Money Deposited Successfully!");
    } else {
        alert("Please enter a valid amount!");
        console.log("Invalid deposit amount");
    }
}

// Withdraw Money
function withdrawMoney() {
    if (!verifyPIN()) return;

    let amount = Number(prompt("Enter withdrawal amount:"));

    if (amount > 0 && Number.isFinite(amount)) {

        if (amount <= balance) {
            balance -= amount;

            document.getElementById("message").innerHTML =
                "Rs. " + amount + " Withdrawn Successfully!";

            document.getElementById("balance").innerHTML =
                "Balance: Rs. " + balance;

            console.log("Withdrawn: Rs.", amount);
            console.log("Remaining Balance: Rs.", balance);

            alert("Please collect your cash!");
        } else {
            alert("Insufficient Balance!");
            console.log("Insufficient Balance!");
        }

    } else {
        alert("Enter a valid withdrawal amount!");
        console.log("Invalid withdrawal amount");
    }
}

// Exit ATM
function exitATM() {
    document.getElementById("message").innerHTML =
        "Thank you for using our ATM!";

    console.log("ATM Session Ended");
    alert("Thank you for using ATM!");
}
