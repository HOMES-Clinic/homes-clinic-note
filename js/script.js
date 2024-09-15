// Open the Overview Tab by Default
document.addEventListener("DOMContentLoaded", function() {
  openTab("Overview");
});

// JavaScript code for tab navigation
function openTab(tabName) {
  var i, tabContent, tabButtons;
  tabContent = document.getElementsByClassName("tab-content");
  tabButtons = document.getElementsByClassName("tab-button");

  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("selected");
  }

  document.getElementById(tabName).style.display = "block";
  document.querySelector('[onclick="openTab(\'' + tabName + '\')"]').classList.add("selected");

  if(tabName=='Encounter'){
    switchSection('admin')
  }

  if(tabName=='GenNote'){
    generateNote();
  }

}

// JavaScript code to compile information into the Compilation tab
function compilePtSum() {
  /*
  var triageContent = document.getElementById("Triage").innerHTML;
  var formsContent = document.getElementById("Forms").innerHTML;
  var encounterContent = document.getElementById("Encounter").innerHTML;
  var afterVisitSummaryContent = document.getElementById("AfterVisitSummary").innerHTML;

  var compilationContent = triageContent + "<br><br>" + formsContent + "<br><br>" +
    encounterContent + "<br><br>" + afterVisitSummaryContent;

  document.getElementById("Compilation").innerHTML = compilationContent;
  */
}

// JavaScript code to save the current time
function saveTime() {
  var currentTime = new Date().toLocaleTimeString();
  var timeButton = document.getElementById("TimeButton");
  timeButton.innerHTML = currentTime;
}

// JavaScript code to print the iframe contents
function printIframeContents() {
  var iframe = document.getElementById("iframes");
  var iframeContents = iframe.contentWindow.document.body.innerHTML;

  var printWindow = window.open('', '_blank');
  printWindow.document.open();
  printWindow.document.write('<html><head><title>Print</title></head><body>' + iframeContents + '</body></html>');
  printWindow.document.close();

  printWindow.print();
}

// ED DIRECTIONS TAB -------------------------------------------------------------
// -----------------------------------------------------------------------------
function openPdf(pdfUrl, tabId) {
  var pdfFrame;
  if (tabId === "Forms") {
    pdfFrame = document.getElementById("pdfFrameForms");
  } else if (tabId === "ED_Directions") {
    pdfFrame = document.getElementById("pdfFrameED");
  }
  
  if (pdfFrame) {
    pdfFrame.src = pdfUrl;
    pdfFrame.style.display = "block";
  }
}