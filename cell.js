/*
	Name: cell.js
	Author: Nelson Lozada Morales
	Course: COTI 4210-LN1
	Date: 10/18/2024
	Purpose: This script generates the receipt for a cellphone package plan
*/

// Prices of the phones
const SLOW_PRICE = 229.95;
const FAST_PRICE = 249.95;
const TURBO_PRICE = 299.95;

// Prices of the packages
const PACK800_PRICE = 45.0;
const PACK1500_PRICE = 65.0;
const PACK3000_PRICE = 80.0;
const PACKUNL_PRICE = 99.0;

// Tax
const TAX_RATE = 0.115;

function generateReceipt() {
    // Get personal details
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    // Get selected phone model
    let modelPriceTotal;
    let modelName = document.getElementById("models").value;
    
    if (modelName == "slow") {
        modelPriceTotal = SLOW_PRICE;
        modelName = "Slow 100";
    } else if (modelName == "fast") {
        modelPriceTotal = FAST_PRICE;
        modelName = "Fast 200";
    } else if (modelName == "turbo") {
        modelPriceTotal = TURBO_PRICE;
        modelName = "Turbo 300";
    }

    // Get selected package
    let packTotal;
    let packName;
    if (document.getElementById("pack800").checked) {
        packTotal = PACK800_PRICE;
        packName = "800 minutes/month";
    } else if (document.getElementById("pack1500").checked) {
        packTotal = PACK1500_PRICE;
        packName = "1500 minutes/month";
    } else if (document.getElementById("pack3000").checked) {
        packTotal = PACK3000_PRICE;
        packName = "3000 minutes/month";
    } else if (document.getElementById("packUnlimited").checked) {
        packTotal = PACKUNL_PRICE;
        packName = "Unlimited minutes/month";
    }

    // Get additions
    let emailValue = 0;
    let textValue = 0;
    let gpsValue = 0;

    if (document.getElementById("emailService").checked) {
        emailValue = 25.0;
    }
    if (document.getElementById("text").checked) {
        textValue = 10.0;
    }
    if (document.getElementById("gps").checked) {
        gpsValue = 15.0;
    }

    let additionTotal = emailValue + textValue + gpsValue;

    // Calculate subtotal, tax, and total
    let subTotal = modelPriceTotal + packTotal + additionTotal;
    let taxAmount = subTotal * TAX_RATE;
    let total = subTotal + taxAmount;

    // Create the receipt content
    let receipt = "Receipt for " + name + ":\n" +
        "Address: " + address + "\nPhone: " + phone + "\nEmail: " + email + "\n" +
		"-----------------------------------------\n" +
        "Selected Model: " + modelName + " ($" + modelPriceTotal.toFixed(2) + ")\n" +
        "Package: " + packName + " ($" + packTotal.toFixed(2) + ")\n" +
        "Additions: Email ($" + emailValue.toFixed(2) + "), Text ($" + textValue.toFixed(2) + "), GPS ($" + gpsValue.toFixed(2) + ")\n" +
        "Subtotal: $" + subTotal.toFixed(2) + "\n" +
        "Tax: $" + taxAmount.toFixed(2) + "\n" +
		"___________________\n" +
        "TOTAL: $" + total.toFixed(2) + "\n";

    // Output the receipt in the text area
    document.getElementById("receiptOutput").value = receipt;

    return false;
}