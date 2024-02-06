window.myApp = window.myApp || {};
window.myApp.sharedData = {
    medications: [],
    started_encounter: false,
    encounter_start_time: 0,
    hpi: '',
    ros: {},
    pmhx: '',
    pshx: '',
    pastmeds: '',
    allergies: '',
    obgynhx: '',
    famhx: '',
    sochx: '',
    physexam: {},
    assessment: '',
    plan: '',
    vitals: {
        bp: '',
        hr: 0,
        height: 0,
        weight: 0,
        bmi: 0,
        temp: 0,
        rr: 0,
    },
    admin: {
        form_submitted: false,
        ptName: '',
        ptDOB: 'DD-MM-YYYY',
        ptGender: 'Select Gender',
        date_of_service: 'DD-MM-YYYY',
        care_team: 'Enter the names of the care team'
    }
};

const initPhysexam = () => {
    const organSystems = ['HEENT', 'Respiratory', 'Cardiovascular', 'Abdominal', 'Musculoskeletal', 'Neurological', 'Genitourinary'];

    organSystems.forEach(system => {
        window.myApp.sharedData.physexam[system] = {
            positive: [],
            negative: [],
            comments: []
        };
    });
};

// Initialize ros
const initRos = () => {
    const categories = ['general', 'skin', 'HEENT', 'cardiovascular', 'pulmonary', 'gastrointestinal', 'genitourinary', 'musculoskeletal', 'endocrine', 'hemeonc', 'neurologic', 'psychiatric'];

    categories.forEach(category => {
        window.myApp.sharedData.ros[category] = {
            positive: [],
            negative: [],
            comments: []
        };
    });
};

// Call the initialization functions
initPhysexam();
initRos();