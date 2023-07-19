document.addEventListener("DOMContentLoaded", loadComments);

function loadComments() {
  const commentsOutput = document.getElementById("commentsOutput");
  const storedComments = JSON.parse(localStorage.getItem("comments")) || [];

  for (const comment of storedComments) {
    addCommentToOutput(comment);
  }
}

function addCommentToOutput(comment) {
  const commentsOutput = document.getElementById("commentsOutput");

  const commentDiv = document.createElement("div");
  commentDiv.classList.add("comment");

  const commentText = document.createElement("p");
  commentText.innerText = comment;
  commentDiv.appendChild(commentText);

  commentsOutput.insertBefore(commentDiv, commentsOutput.firstChild);
}

function submitComment() {
  const commentInput = document.getElementById("commentInput");
  const comment = commentInput.value.trim();

  if (!comment) {
    return;
  }

  addCommentToOutput(comment);
  saveComment(comment);
  commentInput.value = "";
}

function saveComment(comment) {
  const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
  storedComments.push(comment);
  localStorage.setItem("comments", JSON.stringify(storedComments));
}
