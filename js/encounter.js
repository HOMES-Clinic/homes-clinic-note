function startTimer() {
    window.myApp.sharedData.started_encounter = true;
    window.myApp.sharedData.encounter_start_time = Date.now()
}

function saveContent(ID, text) {
    if (window.myApp.sharedData.hasOwnProperty(ID)) {
        // Update the corresponding property
        window.myApp.sharedData[ID] = text;
    } else {
        // pass
    }
}

function logNote() {
    // Save the content of each textarea to the corresponding variable
    var current_selections =  document.getElementById('encounter-input').querySelectorAll("textarea")
    if (current_selections) {
        for (current_selection of current_selections) {
            // Get the value of the textarea
            var current_text = current_selection.value;
            var current_ID = current_selection.id
            // Log the value to the console
            saveContent(current_ID, current_text)
        }
    } else {
        //pass
    }
}

function switchSection(selection) {

    // Save whatever is currently written
    
    logNote();

    var writing_area = document.getElementById('encounter-input');
    var help_col = document.getElementById('encounter-help-col')
    var rows = 27
    if (window.myApp.sharedData.started_encounter){
        help_col.innerHTML = switchHelpCol(selection)
        switch (selection) {
            case 'hpi':
                let hpi_placeholder = 'Write History of Present Illness (HPI) here...'
                writing_area.innerHTML = `<textarea id="hpi" class="form-control" rows="${rows}" placeholder="${hpi_placeholder}">${window.myApp.sharedData.hpi}</textarea>`
                break;
            case 'pmhx':
                let pmhx_rows = 13
                let pmhx_placeholder = `Write Past Medical History (PMHx) here...\n\nCommon conditions at HOMES include:\n - hypertension\n - diabetes\n - hypercholesterolemia`;
                let pshx_placeholder = `Write Past Surgical History (PSHx) here...\n1. Procedure (Date)`;
                writing_area.innerHTML = 
                    `<textarea id="pmhx" class="form-control" rows="${pmhx_rows}" style="margin-bottom: 1%" placeholder="${pmhx_placeholder}">${window.myApp.sharedData.pmhx}</textarea>
                    <textarea id="pshx" class="form-control" rows="${rows-pmhx_rows}" style="margin-top: 1%"placeholder="${pshx_placeholder}">${window.myApp.sharedData.pshx}</textarea>`;
                break;
            case 'medications':
                let med_rows = 19
                let meds_comment = `Write medications here...\n\nRecommended Format:\n1. Medication 1 (Dose, Route) - taken for {condition}, [Does/Does not] need refill (last taken {time})\n2. Medication 2 (Dose, Route) - taken for {condition}, [Does/Does not] need refill (last taken {time})`
                let allergies_comment = `Write allergies here...\n\nPlease note what happens if exposed to allergen`
                writing_area.innerHTML = 
                `<textarea id="pastmeds" class="form-control" rows="${med_rows}" style="margin-bottom: 1%" placeholder="${meds_comment}">${window.myApp.sharedData.pastmeds}</textarea>
                <textarea id="allergies" class="form-control" rows="${rows-med_rows}" style="margin-top: 1%"placeholder="${allergies_comment}">${window.myApp.sharedData.allergies}</textarea>`;
                break;
            case 'obgyn':
                obgyn_placeholder = 'Write ObGyn Hx here...';
                writing_area.innerHTML = `<textarea id="${selection}" class="form-control" rows="${rows}" placeholder="${obgyn_placeholder}">${window.myApp.sharedData.obgynhx}</textarea>`
                break;
            case 'famhx':
                family_placeholder = 'Write Family Hx here...\nFamily Member (living/passed - age/age passed): disease'
                writing_area.innerHTML = `<textarea id="famhx" class="form-control" rows="${rows}" placeholder="${family_placeholder}">${window.myApp.sharedData.famhx}</textarea>`
                break;
            case 'sochx':
                social_placeholder = 'Write Social Hx here...'
                writing_area.innerHTML = `<textarea id="sochx" class="form-control" rows="${rows}" placeholder="${social_placeholder}">${window.myApp.sharedData.sochx}</textarea>`
                break;
            case 'physexam':
                break;
            case 'aandp':
                break;
            default:
                writing_area.innerHTML = ''; // Clear the content for other sections
                break;
        }
    } else {
        alert('Please start the encounter first.');
    }

}

function switchHelpCol(selection) {

    switch(selection) {
        case 'hpi': 
            return generateHPIInfoBox();
        case 'pmhx':
            return '';
        case 'obgyn':
            return generateOBGynInfoBox();
        default:
            return '';
    }

}

function generateHPIInfoBox() {
    return `
        <!-- HPI Information Box -->
        <div id="hpi-info-box" style="text-align: left; border: 2px solid #d3d3d3; border-radius: 10px; padding: 4px; background-color: #f5f5f5; height: 95%; overflow-y: auto;">
            <h3 style="color: #333; font-size: 18px;">HPI Guide</h3>
            <p style="font-size: 14px;">
                To gather a comprehensive HPI, consider the following:
            </p>
            <ul style="font-size: 14px;">
                <li>Chronology/Timing - provide a precise sequence of events.</li>
                <li>If dealing with a chronic issue, <strong>what is different now?</strong></li>
                <li>If multiple complaints, address each sequentially</li>
                <li>Analyze symptoms (remember LOCATES).</li>
            </ul>
            <p><strong>LOCATES:</strong></p>
            <ul style="font-size: 14px;">
                <li><strong>Location:</strong></li>
                <li><strong>Onset:</strong></li>
                <li><strong>Characteristic:</strong></li>
                <li><strong>Aggravating/Alleviating</strong></li>
                <li><strong>Timing/Triggers</strong></li>
                <li><strong>Environment/Emotion</strong></li>
                <li><strong>Severity</strong></li>
            </ul>
        </div>
    `;
}

function generateOBGynInfoBox() {
    return `
        <!-- OBGyn Information Box -->
        <div id="obgyn-info-box" style="text-align: left; border: 2px solid #d3d3d3; border-radius: 10px; padding: 4px; background-color: #f5f5f5; height: 95%; overflow-y: auto;">
            <h3 style="color: #333; font-size: 18px;">OBGyn History Guide</h3>
            <p style="font-size: 14px;">
                To gather a comprehensive OBGyn history, consider the following:
            </p>
            <ul style="font-size: 14px;">
                <li><strong>Menstrual History</strong> - age at menarche/menopause, regularity, duration, flow, any changes.</li>
                <li><strong>Obstetric History</strong> - gravida (total pregnancies), para (pregnancies carried to viable gestational age), abortions/miscarriages.</li>
                <li><strong>Gynecologic Surgeries</strong> - any surgeries related to the reproductive system.</li>
                <li><strong>Contraceptive History</strong> - types used, side effects, satisfaction.</li>
            </ul>
        </div>
    `;
}
