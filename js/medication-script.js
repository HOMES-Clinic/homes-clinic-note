// JavaScript code for managing medications
var formularyList = [];
var prescribedList = [];

// Function to initialize the formulary list
function initializeFormulary() {
  var formularyItems = document.getElementById("formularyList").getElementsByTagName("li");
  for (var i = 0; i < formularyItems.length; i++) {
    formularyList.push(formularyItems[i].innerText);
  }
}

// Function to add a medication to the prescribed list
function addMedication() {
  var selectedMedication = document.querySelector("#formularyList li.selected");
  if (selectedMedication) {
    var medicationName = selectedMedication.innerText;
    if (!prescribedList.includes(medicationName)) {
      prescribedList.push(medicationName);
      updatePrescribedList();
    }
  }
}

// Function to remove a medication from the prescribed list
function removeMedication() {
  var selectedMedication = document.querySelector("#prescribedList li.selected");
  if (selectedMedication) {
    var medicationName = selectedMedication.innerText;
    var index = prescribedList.indexOf(medicationName);
    if (index !== -1) {
      prescribedList.splice(index, 1);
      updatePrescribedList();
    }
  }
}

// Function to update the prescribed list in the UI
function updatePrescribedList() {
  var prescribedListElement = document.getElementById("prescribedList");
  prescribedListElement.innerHTML = "";
  prescribedList.forEach(function (medication) {
    var listItem = document.createElement("li");
    listItem.innerText = medication;
    listItem.addEventListener("click", toggleMedicationSelection);
    prescribedListElement.appendChild(listItem);
  });
}

// Function to select/unselect a medication in the formulary list
function toggleMedicationSelection(event) {
  var listItem = event.target;
  var prescribedListItems = document.querySelectorAll("#prescribedList li");
  prescribedListItems.forEach(function (item) {
    item.classList.remove("selected");
  });
  listItem.classList.add("selected");
}

// Event listener for medication selection in the formulary list
document.addEventListener("DOMContentLoaded", function () {
  initializeFormulary();
  var formularyListItems = document.querySelectorAll("#formularyList li");
  formularyListItems.forEach(function (item) {
    item.addEventListener("click", toggleMedicationSelection);
  });
});
