document.querySelector(".slider").onclick = function() {
  displayMode()
};

function displayMode() {
  document.querySelector("body").classList.toggle("darkmode");
  document.querySelector(".top-container").classList.toggle("darkmode1");
}
