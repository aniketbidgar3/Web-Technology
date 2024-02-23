function previewTitle() {
  updatePreview();
  getValue();
}

function updatePreview() {
  var text = document.getElementById("textInput").value;
  text = text.replace(/\n/g, "<br>");
  var previewSection = document.getElementById("previewSection");
  previewSection.innerHTML = text;
}

function getValue() {
  var inputElement = document.getElementById("title");
  var value = inputElement.value;
  document.getElementById("previewTitle").innerText = value;
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
    document.getElementById("title").value = "";
    updatePreview();
  }
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

function applyFont() {
  var selectedFont = document.getElementById("fonts").value;
  document.getElementById("textInput").style.fontFamily = selectedFont;
  document.getElementById("title").style.fontFamily = selectedFont;
  document.getElementById("previewSection").style.fontFamily = selectedFont;
  document.getElementById("previewTitle").style.fontFamily = selectedFont;
}

function darkMode() {
  var mode = document.getElementById("mode").innerHTML;
  if (mode == '<i class="fa fa-moon-o"></i> ') {
    document.body.classList.add("dark-mode");
    document.getElementById("mode").innerHTML = '<i class="fa fa-sun-o"></i> ';
  } else {
    document.body.classList.remove("dark-mode");
    document.getElementById("mode").innerHTML = '<i class="fa fa-moon-o"></i> ';
  }
}
