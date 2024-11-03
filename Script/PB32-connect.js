document.getElementById("connectButton").addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5500/wtf-2.html"
});
document.getElementById("connectButton2").addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5500/wtf-2.html"
});
document.getElementById("connectButton3").addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5500/wtf-2.html"
});
document.querySelectorAll(".connectButton4").forEach(element => {
  element.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/wtf-2.html";
  });
});

