document.addEventListener("DOMContentLoaded", function () {
  const motelButton = document.getElementById("motelButton");
  const runawayButton1 = document.getElementById("runawayButton1");
  const runawayButton2 = document.getElementById("runawayButton2");
  const message = document.getElementById("message");

  motelButton.addEventListener("click", function () {
    message.classList.toggle("hidden");
  });

  runawayButton1.addEventListener("mouseover", function () {
    teleportRunawayButton(runawayButton1);
  });

  runawayButton2.addEventListener("mouseover", function () {
    teleportRunawayButton(runawayButton2);
  });

  function teleportRunawayButton(button) {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    button.style.left = newX + "px";
    button.style.top = newY + "px";
  }

  teleportRunawayButton(runawayButton1);
  teleportRunawayButton(runawayButton2);
});
