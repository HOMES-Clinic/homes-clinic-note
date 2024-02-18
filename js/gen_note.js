function generateNote() {
    // Extract relevant data from global variables
    //const { form_submitted, ptName, ptDOB, ptGender, date_of_service, care_team } = window.myApp.sharedData.admin;
    const { bp, hr, height, weight, bmi, temp, rr } = window.myApp.sharedData.vitals;
    const { medications, started_encounter, admin, encounter_start_time, hpi, pmhx, pshx, pastmeds, allergies, obgynhx, famhx, sochx, assessment, plan } = window.myApp.sharedData;

    // Extract ROS and Physexam data
    const ros = window.myApp.sharedData.ros;
    const physexam = window.myApp.sharedData.physexam;

    const generatedNote = `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <title>Generated Clinic Note</title>
            <style>
                /* Add your styling here */
            </style>
        </head>
        
        <body>
            <header>
                <!-- Header content goes here -->
                <h1>Clinic Note</h1>
                <h3>Please use "N/A" in all empty text boxes. Do not leave any boxes blank.</h3>
            </header>
        
            <section>
                <label for="patientName">Patient Name</label>
                <input style="font-size:16pt" type="text" id="patientName" value="${admin.ptName}" disabled>
        
                <label for="patientDOB">DOB</label>
                <input style="font-size:16pt" type="text" id="patientDOB" value="${admin.ptDOB}" disabled>
        
                <label for="patientGender">Gender</label>
                <input style="font-size:16pt" type="text" id="patientGender" value="${admin.ptGender}" disabled>
        
                <label for="dateOfService">Date of Service</label>
                <input style="font-size:16pt" type="text" id="dateOfService" value="${admin.date_of_service}" disabled>
        
                <label for="careTeam">Care Team</label>
                <input style="font-size:16pt" type="text" id="careTeam" value="${admin.care_team}" disabled>
            </section>
        
            <section>
                <h2>History of Present Illness</h2>
                <p>${hpi}</p>
            </section>
        
            <section>
                <h2>Review of Systems (ROS)</h2>
                <!-- Loop through ROS categories -->
                ${Object.keys(ros).map(category => `
                    <h3>${category}</h3>
                    <p><strong>Positive:</strong> ${ros[category].positive.join(', ')}</p>
                    <p><strong>Negative:</strong> ${ros[category].negative.join(', ')}</p>
                    <p><strong>Comments:</strong> ${ros[category].comments.join(', ')}</p>
                `).join('')}
            </section>
        
            <section>
                <h2>Past Medical History (PMHx)</h2>
                <p>${pmhx}</p>
            </section>
        
            <!-- Add other sections... -->
        
            <footer>
                <p id="sign">Provider (Print): _____________________________ Sign:__________________________________<br><br><br><br>Clinical Student (Print): _____________________________ Sign:__________________________________</p>
            </footer>
        </body>
        
        </html>
    `;

    // Display the note in the GenNote tab
    //const gennote = document.getElementById('GeneratedClinicalNote');
    //gennote.innerHTML = generatedNote;
     // Create a Blob containing the HTML
     const blob = new Blob([generatedNote], { type: 'text/html' });

     // Get all iframes on the page
     const iframes = document.querySelectorAll('iframe');
 
     // Get the last iframe and set its src to the data URL
     const lastIframe = iframes[iframes.length - 1];
     lastIframe.src = URL.createObjectURL(blob);
}

// Function to print the note
function printNote() {
    // Get the note container
    const gennote = document.getElementById('GeneratedClinicalNote');

    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    
    // Add the note content to the new window
    printWindow.document.write('<html><head><title>Generated Clinical Note</title></head><body>');
    printWindow.document.write(gennote.innerHTML);
    printWindow.document.write('</body></html>');

    // Trigger the print dialog
    printWindow.print();
    printWindow.document.close();
}