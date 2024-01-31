window.myApp = window.myApp || {};
window.myApp.sharedData = {
    medications: [],
    started_encounter: false,
    encounter_start_time: 0,
    hpi: '',
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