// Get the modal element
var modal = document.getElementById("secondMyModal");

// Get the button elements that open the modal
var secondBtns = document.querySelectorAll(".modal-connect-button-3b");

// Get the wallet support section
var walletSupportSection = document.querySelector('.wallet-support');

// Function to toggle modal-open class on wallet-support section
function secondToggleModalEffect() {
  walletSupportSection.classList.toggle('second-modal-open');
}

// Event listeners to toggle class on modal open/close
secondBtns.forEach(function (btn) {
  btn.onclick = function () {
    modal.style.display = "block";
    secondToggleModalEffect();
  }
});

// Get the <span> element that closes the modal
var span = document.querySelector(".close-modal-span");

// Get the button element that closes the modal
var buttonSpan = document.querySelector(".close-modal-button");

// Close modal and revert effect on clicking <span> (x) and button
function closeModal() {
  modal.style.display = "none";
  secondToggleModalEffect();
}

span.onclick = closeModal;
buttonSpan.onclick = closeModal;

// Close modal when clicking outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
}

// Get the items to add event listeners
var items = document.querySelectorAll(".item-class");

items.forEach(function (item) {
  item.addEventListener("click", function () {
    var logoTitle = this.querySelector(".logo-title").textContent;
    var logoSrc = this.querySelector(".logo").src;

    // Update the modal content
    document.querySelector(".modal-connection-status-2a").textContent = logoTitle;
    document.querySelector(".modal-logo").src = logoSrc;

    modal.style.display = "block";
  });
});

// Optional: Function to revert any specific effects (example, can be customized)
function revertVortex() {
  // Add any specific revert actions here
}

// Optional: Timer to handle specific modal effects (example, can be customized)
var vortexTimer;

// Close modal, revert effects, and clear timer
function closeModalWithEffects() {
  closeModal();
  revertVortex();
  clearTimeout(vortexTimer);
}

span.onclick = closeModalWithEffects;
buttonSpan.onclick = closeModalWithEffects;
