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

