var modal = document.getElementById("myModal");
var secondModal = document.getElementById("mySecondModal");

// Get the button elements that open the modal
var btns = document.querySelectorAll(".openModalButton");

// Get the <span> elements that close the modal
var span = document.getElementsByClassName("close")[0];
var buttonSpan = document.getElementsByClassName("close-button")[0];

// Function to revert the effect of openVortex
function revertVortex() {
  // Revert HTML content
  document.querySelector('.flex-section-A').innerHTML = `
        <div class="connection-box">
            <div class="text-content-2"></div>
            <p class="modal-connection-status">connecting...</p>
        </div>
    `;

  // Revert CSS styles
  document.querySelector('.flex-section-A').style.border = '';
  document.querySelector('.modal-connection-status').style.color = '';
}

// When the user clicks a button, open the modal and apply openVortex effect
btns.forEach(function (btn) {
  btn.onclick = function () {
    modal.style.display = "block";
    openVortex();
  }
});

// When the user clicks on <span> (x), close the modal and revert the effect
span.onclick = function () {
  modal.style.display = "none";
  revertVortex();
}

buttonSpan.onclick = function () {
  secondModal.style.display = "none";
  revertVortex();
}

// When the user clicks anywhere outside of the modal, close it and revert the effect
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    revertVortex();
  } else if (event.target == secondModal) {
    secondModal.style.display = "none";
    revertVortex();
  }
}

// Define the openVortex function
function openVortex() {
  setTimeout(function () {
    // Change HTML content
    document.querySelector('.flex-section-A').innerHTML = `
            <div class="connection-box">
                <div class="text-content-2"></div>
                <p class="modal-connection-status-3a">Error connecting</p>
                <button class="modal-connect-button-3b">Connect manually</button>
            </div>
        `;

    // Apply new CSS styles
    document.querySelector('.flex-section-A').style.border = '2px solid #df2911';
    document.querySelector('.modal-connection-status-3a').style.color = '#df2911';

    // Add event listener to the "Connect manually" button to open the second modal
    document.querySelector('.modal-connect-button-3b').onclick = function () {
      modal.style.display = "none";
      secondModal.style.display = "block";
    };
  }, 5000); // 5000 milliseconds = 5 seconds
}