document.addEventListener('DOMContentLoaded', function() {
    const checklistContainer = document.getElementById('checklist-container');
    
    const checklistData = [
        {
            // Colon cancer screening
            name: "Colon cancer screening",
            patients: "> 45yo",
            frequency: "Annually (stool card) Q10y (colonoscopy)",
            details: [
                "Ask if interested in colon cancer screening (in any modality - colonoscopy, stool card)",
                "If interested in stool card, educate about stool card, tell them what they'll have to do (leave a stool sample and drop it off to Cathedral or Caroline when convenient)",
                "If interested in colonoscopy & due (last was 10 years ago or last abnormal or never had one before and >45yo), document in plan referral for colonoscopy",
                "Ideal timing: at end of H&P, before leaving the room to prepare presentation"
            ],
            followUp: [
                "If interested: go over instructions at end of encounter - leave stool sample (or wipe after defecating) and return to Cathedral or Caroline (Cathedral preferred over Caroline) at convenience during the week or before they leave HOMES*. Discuss any barriers.",
                "Return sample to Cathedral or Caroline St Clinic at convenience during the week or before they leave HOMES",
                "Results: Usually after samples are given, the results will come back within a week. Instruct patients to call clinic and ask about results if they have not been contacted within a week. Emphasize importance of accurate contact info."
            ]
        },
        {
            // Depression
            name: "Depression (PHQ-9)",
            patients: "All Patients",
            frequency: "Annually",
            details: [
                "Pre-Clinical/Clinical student performs PHQ-9 questionnaire and provides a score for the patient based on responses. Document in clinic note.",
                "Ideal Timing: Towards end of H&P after rapport has been established."
            ],
            followUp: [
                "If PHQ-9 score ≥5: Refer patients to psychiatry/behavioral health services at HHH. Document request for referral in clinic note and Dr. Clark will place the order the following week.",
                "Ensure the patient has provided contact information for follow-up."
            ]
        },
        {
            // Naloxone and Opioid Use
            name: "Naloxone and Opioid Use",
            patients: "All Patients",
            frequency: "Every Visit",
            details: [
                "Pre-Clinical/Clinical students ask about opioid use history, prescription status, and potential misuse during H&P.",
                "Assess risk factors for opioid overdose, including high-dose opioid therapy, concurrent use of sedatives, or a history of substance use disorder.",
                "Ideal Timing: During medication review or social history discussion."
            ],
            followUp: [
                "If risk factors for opioid overdose are identified, discuss the importance of naloxone as a preventive measure.",
                "Offer to provide a naloxone kit and training on its use (if available in the clinic). If unavailable, refer to Dr. Wallace.",
                "For patients with ongoing opioid use disorder, document in the clinic note and coordinate with behavioral health services for comprehensive treatment, including medication-assisted therapy (MAT).",
                "Counsel patients on safe opioid use, avoiding concurrent sedative use, and recognizing overdose symptoms.",
                "Provide educational materials about naloxone and overdose prevention."
            ]
        },
        {
            // Substance use (DAST)
            name: "Substance use (DAST)",
            patients: "All Patients",
            frequency: "Annually",
            details: [
                "Pre-Clinical/Clinical students complete questionnaires along with PHQ-9 with patients. Document completion (even if negative, e.g., 'no referrals necessary' or 'reinforced positive adaptive behavior of not using X') in clinic note.",
                "Ideal Timing: During social history: Fill out DAST and AUDIT questionnaires."
            ],
            followUp: [
                "If screen positive (AUDIT: answer yes to any question and/or DAST > 8): Ask patients if they have a psychiatrist/behavioral health specialist. If they do not, ask if they are interested in seeing one.",
                "If interested, document the request for referral in the clinic note and Dr. Clark will submit a referral to psychiatry.",
                "If they are interested in rehab, refer them to HHH if they do not already have a case manager (or their case manager, if they have one).",
                "If they are seeking spiritual/religious input, recommend the HHH chaplain, Mary Bradley. If interested, document the request for chaplain in the clinic note and Dr. Clark will submit a referral.",
                "Ensure patient has provided contact information for follow-up."
            ]
        },        
        {
            // Smoking survey
            name: "Smoking (Standard Survey)",
            patients: "All Patients",
            frequency: "Every Visit",
            details: [
                "Pre-Clinical/Clinical student asks during social history of H&P. Document in clinic note.",
                "Ideal Timing: Ask during social history and if positive, counsel immediately (DO NOT wait until end of visit to revisit): assess level of readiness to change and current progress, then respond appropriately."
            ],
            followUp: [
                "If Yes: Counsel patient about cessation and refer to Texas Smoking Quitline: 1-877-937-7848",
                "Unfortunately, we do not have any resources (gum, patches, etc.) currently that we can provide directly. Refer patients to their primary care physician for resources."
            ]
        },
        {
            // Alcohol Use (AUDIT)
            name: "Alcohol use (AUDIT)",
            patients: "All Patients",
            frequency: "Every Visit",
            details: [
                "Pre-Clinical/Clinical students complete the AUDIT questionnaire with patients. Document completion in clinic notes, even if results are negative (e.g., 'no referrals necessary').",
                "Ideal Timing: During social history. Perform AUDIT alongside other screening questionnaires (e.g., PHQ9)."
            ],
            followUp: [
                "If any question is positive: Counsel the patient about alcohol use and assess their willingness to change.",
                "If patient is interested in addressing alcohol use, document the request for referral in the clinic note. Dr. Clark will submit the referral.",
                "For patients seeking additional support (e.g., rehab or spiritual guidance), refer to available resources such as HHH chaplain or case management.",
            ]
        },
        {
            // HIV
            name: "HIV",
            patients: "If patient has had a high-risk encounter (sex without a condom or sex with an individual who is HIV positive) in the last 6 months. If patient was tested within the last year due to a high-risk encounter and it has been at least 30 days. N/A for patients with established diagnosis of HIV.",
            frequency: "Every Visit",
            details: [
                "Pre-Clinical/Clinical students ask if an HIV test has been performed within the last year, or if interested in HIV test due to recent high-risk encounter since last test.",
                "Ideal Timing: Ask during social history. Perform as early as possible (with approval from preceptor or Dr. Wallace) to allow for time for the test results, if needed. Test results in 20-40 minutes.",
                "Procedure using OraQuick HIV Antibody Test:",
                "1. Collect sample: Swab upper and lower gums with test device.",
                "2. Insert device into kit's vial (with developer solution).",
                "3. Wait 20-40 minutes for test result.",
                "*NOTE: if high-risk encounter was <30 days, the rapid antibody test may be falsely negative."
            ],
            followUp: [
                "If no HIV test within past year or recent high-risk sexual encounter, offer to do rapid HIV test in clinic (in pharmacy cabinet).",
                "If interested in HIV test, notify pharmacy team so results come back when patient is in clinic to allow time for appropriate counseling.",
                "If test is positive, document in note and Dr. Clark will refer to HHH.",
                "Ask if patient is interested in HHH PrEP Clinic. If so, provide PrEP pamphlet and a quick walkthrough of next steps.",
                "If suspected false negative (high-risk encounter <30 days of test): document in note and Dr. Clark will refer to HHH for further management.",
                "If patient has established diagnosis of HIV: assess medication compliance, clinic follow-up, last viral load, and CD4 (if known).",
                "For all patients: Counsel on safe sex practices. Inform that condoms will be included in the care kit."
            ]
        },
        {
            // Diabetes
            name: "Diabetes (POC HbA1c)",
            patients:"Patients with Established Diagnosis of Diabetes. Patients with pre-diabetes or suspected diabetes are eligible for POC A1c.",
            frequency: "Every 6 months",
            details: [
                "Pre-Clinical/Clinical students ask about diabetes status during H&P. If patient is diabetic and has not had a HbA1c test in the last 6 months, conduct the test.",
                "Ask about ophthalmology visit and diabetic foot exam within past year.",
                "Ideal Timing: Perform after H&P and preceptor discussion (with approval from preceptor or Dr. Wallace). Test results in ~10 minutes.",
                "Procedure: Turn on Siemens DCA Analyzer. Prick patient's finger, collect blood sample using micropipette, and follow prompts on the analyzer."
            ],
            followUp: [
                "If positive (>7%): Counsel with preceptor/Dr. Wallace and pharmacy volunteer on medication use. Refer for ophthalmology and podiatry as needed.",
                "If negative (<7%): Reinforce positive lifestyle modifications and continuation of medications.",
                "For suspected diabetes or pre-diabetes: Perform POC glucose test.",
                "All: Ensure follow-up with primary care for longitudinal management."
            ]
        },
        {
            // Gyn Cervical Cancer
            name: "Cervical Cancer",
            patients: "Women 21-65yo",
            frequency: "Not specified",
            details: [
                "Ask when most recent cervical cancer screening was performed, history of abnormal Pap smears (≥21yo), or positive high-risk HPV testing (≥30yo).",
                "21-29yo: Screening with Pap smear every 3 years.",
                "30-65yo: Screening with combined Pap smear + high-risk HPV testing every 5 years.",
                "Ideal Timing: During GYN history."
            ],
            followUp: [
                "If due for screening, instruct to return to Cathedral or Caroline St Clinic.",
                "Document in note so preceptor can place the order.",
                "Discuss management of abnormal testing with attending."
            ]
        },
        {
            // Gyn Mammogram
            name: "Mammogram",
            patients: "Women 50-75yo OR women with family history",
            frequency: "Every 2 years",
            details: [
                "Ask about most recent mammogram and history of abnormal results.",
                "Ideal Timing: During GYN history or family history (breast, endometrial, ovarian cancers)."
            ],
            followUp: [
                "If no mammogram within past 2 years, document in note for preceptor to place the order.",
                "Discuss management of abnormal testing or earlier screening based on strong family history with attending."
            ]
        },
        {
            // BMI Obesity
            name: "BMI",
            patients: "All Patients",
            frequency: "Every Visit",
            details: [
                "Collect height and weight during triage. Calculate BMI using the standard equation."
            ],
            followUp: [
                "Refer to nutrition if BMI <18.5 or ≥25.",
                "Dr. Clark will coordinate with nutrition services or refer based on insurance type.",
                "± Case management involvement."
            ]
        }
    ];


    // Making classes for each item and toggling visibility for dropdowns
    checklistData.forEach(item => {
        const checklistItem = document.createElement('div');
        checklistItem.className = 'checklist-item';

        const header = document.createElement('div');
        header.className = 'checklist-header';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        const label = document.createElement('label');
        label.textContent = item.name;
        
        const dropdownIcon = document.createElement('span');
        dropdownIcon.className = 'checklist-dropdown-icon';
        dropdownIcon.textContent = '↓';

        header.appendChild(checkbox);
        header.appendChild(label);
        header.appendChild(dropdownIcon);

        checklistItem.appendChild(header);

        // Patients
        const patientsLabel = document.createElement('strong');
        patientsLabel.textContent = 'Patients: ';
        patientsLabel.className = 'checklist-patients'; 
        const patientsText = document.createElement('span');
        patientsText.textContent = item.patients;
        const patientsContainer = document.createElement('div');
        patientsContainer.appendChild(patientsLabel);
        patientsContainer.appendChild(patientsText);
        checklistItem.appendChild(patientsContainer);

        // Frequency
        const frequencyLabel = document.createElement('strong');
        frequencyLabel.textContent = 'Frequency: ';
        frequencyLabel.className = 'checklist-frequency';
        const frequencyText = document.createElement('span');
        frequencyText.textContent = item.frequency;
        const frequencyContainer = document.createElement('div');
        frequencyContainer.appendChild(frequencyLabel);
        frequencyContainer.appendChild(frequencyText);
        checklistItem.appendChild(frequencyContainer);

        // Details
        const detailsLabel = document.createElement('strong');
        detailsLabel.textContent = 'Details: ';
        const detailsContainer = document.createElement('div');
        detailsContainer.className = 'checklist-details';
        detailsContainer.appendChild(detailsLabel);
        item.details.forEach(detail => {
            const detailParagraph = document.createElement('p');
            detailParagraph.textContent = detail;
            detailsContainer.appendChild(detailParagraph);
        });

        checklistItem.appendChild(detailsContainer);

        // Follow-up
        const followUpLabel = document.createElement('strong');
        followUpLabel.textContent = 'Follow-up: ';
        const followUpContainer = document.createElement('div');
        followUpContainer.className = 'checklist-follow-up';
        followUpContainer.appendChild(followUpLabel);
        item.followUp.forEach(followUp => {
            const followUpParagraph = document.createElement('p');
            followUpParagraph.textContent = followUp;
            followUpContainer.appendChild(followUpParagraph);
        });

        checklistItem.appendChild(followUpContainer);

        // Toggle visibility
        let isVisible = false;
        header.addEventListener('click', function() {
            isVisible = !isVisible;
            detailsContainer.style.display = isVisible ? 'block' : 'none';
            followUpContainer.style.display = isVisible ? 'block' : 'none';
            dropdownIcon.classList.toggle('open', isVisible);
        });

        checklistContainer.appendChild(checklistItem);
    });
});