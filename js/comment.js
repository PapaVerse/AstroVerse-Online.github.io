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

  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.classList.add("editable");
  editButton.onclick = () => editComment(commentDiv, comment);
  commentDiv.appendChild(editButton);

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
  storedComments.unshift(comment);
  localStorage.setItem("comments", JSON.stringify(storedComments));
}

function editComment(commentDiv, comment) {
  const newText = prompt("Edit your comment:", comment);
  if (newText !== null && newText.trim() !== "") {
    const commentText = commentDiv.querySelector("p");
    commentText.innerText = newText;
    updateStoredComment(comment, newText);
  }
}

function updateStoredComment(oldComment, newComment) {
  const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
  const index = storedComments.indexOf(oldComment);
  if (index !== -1) {
    storedComments[index] = newComment;
    localStorage.setItem("comments", JSON.stringify(storedComments));
  }
}
