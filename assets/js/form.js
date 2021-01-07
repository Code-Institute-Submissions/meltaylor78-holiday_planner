
window.onload = function () {
    document.getElementById("formSection").style.display = "none"
}

function functionShowHide() {
  var x = document.getElementById("formSection");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
