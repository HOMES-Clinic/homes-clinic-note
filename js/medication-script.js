let MedicationDict = {
  'Amlodipine': 'Ca Channel Blocker',
  'Aspirin': 'PG Inhibitor',
  'Ethosuximide': 'Absence Seizures',
  'Fluoxetine': 'SSRI',
  'Gabapentin': 'Neuropathic Pain',
  'Lamotrigine': 'Maintenance for Bipolar Disorder',
  'Lisinopril': 'ACE Inhibitor',
  'Lithium': 'Bipolar Disorder',
  'Metoprolol': 'Beta Blocker',
  'Omeprazole': 'H+/K+ Inhibitor',
  'Paroxetine': 'SSRI',
  'Phenytoin': 'Broad Spectrum Seizures',
};

let MedicationMap = new Map(Object.entries(MedicationDict));

let medications = Object.keys(MedicationDict);

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
  const medicationList = document.getElementById('medicationList');
  medications.forEach((medication, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span class="medication" onclick="toggleSelection(${index})">${medication}</span>`;
    medicationList.appendChild(listItem);
});
});

function searchFunctionality() {
  document.getElementById('medicationSearchBar').addEventListener('input', function() {
    var searchQuery = this.value.toLowerCase();
    var textElements = document.querySelectorAll('span');
    textElements.forEach(function(element) {
      var textContent = element.textContent.toLowerCase();
      // Show or hide text elements based on the search query
      if (textContent.includes(searchQuery)) {
          element.classList.remove('hidden');
      } else {
          element.classList.add('hidden');
      }
  });
  });
}

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

  window.myApp.sharedData.medications.length = 0;
  window.myApp.sharedData.medications.push(selectedValues);
}
