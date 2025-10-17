
const submitBox = document.querySelector(".submit");
const messageContainer = document.getElementById("message-container");
const mainBox = document.querySelector(".main");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".error-message");
const dismissButton = document.querySelector(".dismiss");

messageContainer.classList.add('invisible');

submitBox.addEventListener("click", function(event) {
  event.preventDefault();

  // Check email validity first
  if (!emailInput.checkValidity()) {
    errorMessage.classList.remove("invisible");
    emailInput.classList.add("error-border");
    return;
  }

  // If valid, remove any old error state
  errorMessage.classList.add("invisible");
  emailInput.classList.remove("error-border");

  //  Then ask for confirmation
  const confirmSubmit = confirm('Do you really want to submit the form?');
  if (!confirmSubmit) return;

  // Finally, hide form and show success message
  mainBox.classList.add('invisible');
  messageContainer.classList.remove('invisible');

  dismissButton.addEventListener("click", function() {
    messageContainer.classList.add("invisible");
    mainBox.classList.remove('invisible');
  })

});

