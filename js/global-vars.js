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
    physexam: {
        'HEENT': {
            positive: [],
            negative: [],
            comments: []
        }, 
        'Respiratory': {
            positive: [],
            negative: [],
            comments: []
        },
        'Cardiovascular': {
            positive: [],
            negative: [],
            comments: []
        },
        'Abdominal': {
            positive: [],
            negative: [],
            comments: []
        },
        'Musculoskeletal': {
            positive: [],
            negative: [],
            comments: []
        },
        'Neurological': {
            positive: [],
            negative: [],
            comments: []
        },
        'Genitourinary': {
            positive: [],
            negative: [],
            comments: []
        }
    },
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