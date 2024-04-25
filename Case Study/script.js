document.addEventListener("DOMContentLoaded", function () {
  // Handle the blog form submission
  document
    .getElementById("blogForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form behavior

      // Get the title and content from the form inputs
      const title = document.getElementById("title").value;
      const content = document.getElementById("content").value;

      // Create a new blog entry
      const entry = document.createElement("div");
      entry.classList.add("blog-entry");
      entry.innerHTML = `<h3>${title}</h3><p>${content}</p>
            <button class="btn btn-left edit-btn">Edit</button>
            <button class="btn btn-right delete-btn">Delete</button>`;

      // Add the new entry to the blog entries container
      const blogEntries = document.getElementById("blogEntries");
      const lastEntry = blogEntries.lastElementChild;

      if (lastEntry && lastEntry.classList.contains("blog-entry")) {
        if (
          lastEntry.previousElementSibling &&
          lastEntry.previousElementSibling.classList.contains("clear")
        ) {
          blogEntries.insertBefore(entry, lastEntry.previousElementSibling);
        } else {
          const clearDiv = document.createElement("div");
          clearDiv.classList.add("clear");
          blogEntries.insertBefore(entry, clearDiv.nextSibling);
        }
      } else {
        blogEntries.appendChild(entry);
      }

      // Clear form fields after submission
      document.getElementById("title").value = "";
      document.getElementById("content").value = "";
    });

  // Handle click events for edit and delete buttons
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      event.target.parentElement.remove(); // Delete the blog entry
    } else if (event.target.classList.contains("edit-btn")) {
      // Edit the blog entry by reusing the form inputs
      const entry = event.target.parentElement;
      const title = entry.querySelector("h3").innerText;
      const content = entry.querySelector("p").innerText;

      document.getElementById("title").value = title; // Set the title input field
      document.getElementById("content").value = content; // Set the content input field

      entry.remove(); // Remove the old entry
    }
  });
});
