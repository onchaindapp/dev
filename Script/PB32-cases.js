document.addEventListener('DOMContentLoaded', function () {
  const targetURL = 'http://onchaindapp.github.io/dev/login.html'; // Replace with your target URL
  const caseItemContainers = document.querySelectorAll('.case-item-container, .case-item-container-2');
  caseItemContainers.forEach(container => {
    container.addEventListener('click', function () {
      window.location.href = targetURL;
    });
  });
});
