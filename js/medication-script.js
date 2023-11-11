let MedicationDict = {
  'Aspirin': 'PG Inhibitor',
  'Lisinopril': 'ACE Inhibitor',
  'Metoprolol': 'Beta Blocker'
};

let MedicationMap = new Map(Object.entries(MedicationDict));

// Function to update the prescribed list in the UI
function updatePrescribedList(selectedValues) {
  var prescribedListElement = document.getElementById("prescribedList");
  prescribedListElement.innerHTML = "";
  selectedValues.forEach(function (medication) {
    var listItem = document.createElement("li");
    listItem.innerText = medication;
    listItem.addEventListener("click", toggleMedicationSelection);
    prescribedListElement.appendChild(listItem);
  });
}

function updateDrugInformation(selectedDrug) {
  var drugInformationTextbox = document.getElementById("medicationInfo");
  drugInformationTextbox.value = MedicationMap.get(selectedDrug);
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
  const medications = Object.keys(MedicationDict);
  const medicationList = document.getElementById('medicationList');
  medications.forEach((medication, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span class="medication" onclick="toggleSelection(${index})">${medication}</span>`;
    medicationList.appendChild(listItem);
});
});

function toggleSelection(index) {
  const medicationElement = document.querySelectorAll('.medication')[index];
  medicationElement.classList.toggle('bold');
  updateDrugInformation(medicationElement.textContent);
}

function saveSelection() {
  // Get all selected medications
  const selectedMedications = document.querySelectorAll('.bold');

  // Create a list of selected medication values
  const selectedValues = Array.from(selectedMedications).map(medication => medication.innerText);

  // Display the selected medications in a new window or alert
  updatePrescribedList(selectedValues);

  window.myApp.sharedData.dataArray.length = 0;
  window.myApp.sharedData.dataArray.push(selectedValues);
}
