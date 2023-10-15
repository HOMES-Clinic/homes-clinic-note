$(window).on("load", function () {
    var textarea = $("#referral");
    textarea.css("height", "auto"); // Reset the height to auto
    textarea.css("height", textarea[0].scrollHeight + "px"); // Set the height based on content

    var referralDiv = document.getElementById("docname");
    referralDiv.innerHTML = `Dr. <strong>**INSERT DOCTOR NAME**</strong>
    HOMES Clinic`;
});

$(document).ready(function () {
    $(window).on("resize", function () {
        var textarea = $("#referral");
        textarea.css("height", "auto"); // Reset the height to auto
        textarea.css("height", textarea[0].scrollHeight + "px"); // Set the height based on content
    });
    
    ("textarea").on("input", function () {
        var textarea = $(this);
        textarea.css("height", "auto"); // Reset the height to auto
        textarea.css("height", textarea[0].scrollHeight + "px"); // Set the height based on content
    });
});

function printReferral() {
    window.print();
}

