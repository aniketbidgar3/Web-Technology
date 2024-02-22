function updatePreview() {
  var text = document.getElementById("textInput").value;
  var previewSection = document.getElementById("previewSection");
  previewSection.textContent = text;
}


function lowercaseText() {
  var text = document.getElementById("textInput").value;
  document.getElementById("textInput").value = text.toLowerCase();
  updatePreview();
}

function uppercaseText() {
  var text = document.getElementById("textInput").value;
  document.getElementById("textInput").value = text.toUpperCase();
  updatePreview();
}

function clearText() {
  var confirmClear = confirm("Are you sure you want to clear the text?");
  if (confirmClear) {
    document.getElementById("textInput").value = "";
}
updatePreview();
}

function copyText() {
  var text = document.getElementById("textInput");
  text.select();
  document.execCommand("copy");
  alert("Text copied to clipboard !");
}

function removeExtraSpaces() {
  var text = document.getElementById("textInput").value;
  text = text.replace(/\s+/g, " ");
  document.getElementById("textInput").value = text.trim();
  updatePreview();
}

function capitalize() {
  var text = document.getElementById("textInput").value;
  var newText = text.replace(/(^|\. *)([a-z])/g, function (match, p1, p2) {
    return p1 + p2.toUpperCase();
  });
  document.getElementById("textInput").value = newText;
  updatePreview();
}
