// below 3 functions are used for Preview the Whole text including title and text
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

//Used to covert text into Lowercase
function lowercaseText() {
  var text = document.getElementById("textInput").value;
  document.getElementById("textInput").value = text.toLowerCase();
  updatePreview();
}

//Used to covert text into Uppercase
function uppercaseText() {
  var text = document.getElementById("textInput").value;
  document.getElementById("textInput").value = text.toUpperCase();
  updatePreview();
}

//Used to clear the text
function clearText() {
  var confirmClear = confirm("Are you sure you want to clear the text?");
  if (confirmClear) {
    document.getElementById("textInput").value = "";
    document.getElementById("title").value = "";
    updatePreview();
  }
}

//Used to copy the text
function copyText() {
  var text = document.getElementById("textInput");
  text.select();
  document.execCommand("copy");
  alert("Text copied to clipboard !");
}

//Used to Remove the extra spaces from the text
function removeExtraSpaces() {
  var text = document.getElementById("textInput").value;
  text = text.replace(/\s+/g, " ");
  document.getElementById("textInput").value = text.trim();
  updatePreview();
}

//Used to covert the first letter after '.' in capital letter
function capitalize() {
  var text = document.getElementById("textInput").value;
  var newText = text.replace(/(^|\. *)([a-z])/g, function (match, p1, p2) {
    return p1 + p2.toUpperCase();
  });
  document.getElementById("textInput").value = newText;
  updatePreview();
}

//used to change the font of the text
function applyFont() {
  var selectedFont = document.getElementById("fonts").value;
  document.getElementById("textInput").style.fontFamily = selectedFont;
  document.getElementById("title").style.fontFamily = selectedFont;
  document.getElementById("previewSection").style.fontFamily = selectedFont;
  document.getElementById("previewTitle").style.fontFamily = selectedFont;
}

//used to enable darkmode
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
