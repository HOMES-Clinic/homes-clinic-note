function printSummary() {
    window.print();
}

function addMedicationRow() {
    var table = document.getElementById("medication-table");
    var row = table.insertRow(-1);
    for (var i = 0; i < 5; i++) {
        var cell = row.insertCell(i);
        cell.contentEditable = "true";
    }
}

function removeMedicationRow() {
    var table = document.getElementById("medication-table");
    if (table.rows.length > 2) {
        table.deleteRow(-1);
    }
}

function addReferral() {
    var referralList = document.getElementById("referral-list");
    var otherReferralLi = document.getElementById("otherReferral");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    var userInput = prompt("Enter the custom referral text:");
    var textElement = document.createElement("span");
    textElement.textContent = " " + userInput; // Add a space in front

    var label = document.createElement("label");
    label.appendChild(checkbox);
    label.appendChild(textElement);

    var listItem = document.createElement("li");
    listItem.appendChild(label);

    referralList.insertBefore(listItem, otherReferralLi.nextSibling);
}