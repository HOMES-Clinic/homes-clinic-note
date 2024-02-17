// Functions for the triage tab

// Function for collapsible buttons
function collapseClick(button) {
  button.classList.toggle("active");
  var content = button.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}



// Function for Triage Table

//let triageList = [{
//  name: 'Dinner',
//  DOB: '2022-12-22',
//  cc: 'too much stuff to do',
//  temp: 98.5,
//  hhh: 'Yes'
//}, {
//  name: 'Potato',
//  DOB: '2022-02-22',
//  cc: 'get this done',
//  temp: 95.5,
//  hhh: 'Unsure'
//}];

//renderTriageList();

let triageList;

function renderTriageList() {
  let triageListHTML = '';

  triageList.forEach((triageObject, index) => {
    const { name, DOB, cc, temp, hhh } = triageObject;
    const html = `
      <div class="${triageObject.strikethrough ? 'strikethrough' : ''}">${name}</div>
      <div class="${triageObject.strikethrough ? 'strikethrough' : ''}">${DOB}</div>
      <div class="${triageObject.strikethrough ? 'strikethrough' : ''}">${cc}</div>
      <div class="${triageObject.strikethrough ? 'strikethrough' : ''}">${temp}</div>
      <div class="${triageObject.strikethrough ? 'strikethrough' : ''}">${hhh}</div> 
      <button class="delete-triage-button js-delete-triage-button">Delete</button> 
    `;
    triageListHTML += html;
  });

  document.querySelector('.js-triage-list')
    .innerHTML = triageListHTML;

  // Striking through patients that we do not want to see (toggleable)
  document.querySelectorAll('.js-delete-triage-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        triageList[index].strikethrough = !triageList[index].strikethrough;
        //triageList.splice(index, 1);
        renderTriageList();
      });
    });
}

document.querySelector('.js-add-triage-button')
  .addEventListener('click', () => {
    addTriage();
  });

function addTriage() {
  // Initializing an empty triageList
  if (!triageList) {
    triageList = [];
  }

  // Name
  const nameInputElement = document.querySelector('.js-name-input');
  const name = nameInputElement.value;

  // Date of birth
  const dobInputElement = document.querySelector('.js-dob-input');
  const DOB = dobInputElement.value;

  // Chief Concern
  const ccInputElement = document.querySelector('.js-cc-input');
  const cc = ccInputElement.value;

  // Temperature 
  const tempInputElement = document.querySelector('.js-temp-input');
  const temp = tempInputElement.value;

  // New to HHH or Harris Health
  const hhhInputElements = document.querySelectorAll('.js-hhh-input');
  let hhh;
  hhhInputElements.forEach((radioButton) => {
    if (radioButton.checked) {
      hhh = radioButton.value;
      radioButton.checked = false;
    }
  })

  // Adding new patients into the triageList
  triageList.push({ name, DOB, cc, temp, hhh });
  console.log(triageList);

  // Resetting values
  nameInputElement.value = '';
  dobInputElement.value = '';
  ccInputElement.value = '';
  tempInputElement.value = '';
  hhhInputElements.value = '';

  renderTriageList();
}