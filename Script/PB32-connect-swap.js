var modal = document.getElementById("myModal");
var walletSupportSection = document.querySelector('.wallet-support');
function toggleModalEffect() {
  walletSupportSection.classList.toggle('modal-open');
}

btns.forEach(function (btn) {
  btn.onclick = function () {
    modal.style.display = "block";
    toggleModalEffect();
    openVortex();
  }
});

span.onclick = function () {
  modal.style.display = "none";
  toggleModalEffect();
  revertVortex();
}

buttonSpan.onclick = function () {
  modal.style.display = "none";
  toggleModalEffect();
  revertVortex();
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    toggleModalEffect();
    revertVortex();
  }
}
