function startTimer() {
    window.myApp.sharedData.started_encounter = true;
}

function switchSection(selection) {
    var writingarea = document.getElementById('encounter-input');

    if (window.myApp.sharedData.started_encounter){
        switch (selection) {
            case 'hpi':
                if (window.myApp.sharedData.hpi!='') {
                    // Set default content if it's the first time
                    loadContent('hpi-box', window.myApp.sharedData.hpi);
                }
                else {
                    writingarea.innerHTML = `<textarea id="hpi-box" class="form-control" rows="27" placeholder="Write History of Present Illness (HPI) here..."></textarea>`;
                }
                break;
            case 'pmhx':
                pmhx_comment = `Write Past Medical History (PMHx) here...\n\nCommon conditions at HOMES include:\n - hypertension\n - diabetes\n - hypercholesterolemia`;
                pshx_comment = `Write Past Surgical History (PSHx) here...`;
                writingarea.innerHTML = 
                `<textarea id="pmhx-box" class="form-control" rows="13" style="margin-bottom: 1%" placeholder="${pmhx_comment}"></textarea>
                <textarea id="pshx-box" class="form-control" rows="13" style="margin-top: 1%"placeholder="${pshx_comment}"></textarea>`;
                break;
            case 'medications':
                meds_comment = `Write medications here...`
                allergies_comment = `Write allergies here...`
                writingarea.innerHTML = 
                `<textarea id="meds-box" class="form-control" rows="19" style="margin-bottom: 1%" placeholder="${meds_comment}"></textarea>
                <textarea id="allergies-box" class="form-control" rows="7" style="margin-top: 1%"placeholder="${allergies_comment}"></textarea>`;
                break;
            default:
                writingarea.innerHTML = ''; // Clear the content for other sections
                break;
        }
    } else {
        alert('Please start the encounter first.');
    }

}

function loadContent(textareaId, savedContent) {
    var writingarea = document.getElementById('encounter-input');
    if (!savedContent) {
        // Set default content if it's the first time
        savedContent = "Write your content here...";
    }
    writingarea.innerHTML = `<textarea id="${textareaId}" class="form-control" rows="27">${savedContent}</textarea>`;
}

function logNote() {
    // Save the content of each textarea to the corresponding variable
    window.myApp.sharedData.hpi = document.getElementById('hpi-box').value;
    window.myApp.sharedData.pmhx = document.getElementById('pmhx-box').value;
    window.myApp.sharedData.pshx = document.getElementById('pshx-box').value;

    alert("Note successfully saved!");
}