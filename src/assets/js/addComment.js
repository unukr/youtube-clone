import axios from "axios";

const commentsForm = document.getElementById("jsCommentsAddForm");
const commentsList = document.getElementById("jsCommentsList");
const commentsNumber = document.getElementById("jsCommentsNumber");

const increaseNumber = () => {
  commentsNumber.innerHTML =
    parseInt(commentsNumber.innerHTML, 10) + 1;
};

const addComment = (comment) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const form = document.createElement("form");
  const btn = document.createElement("button");
  span.innerHTML = comment;
  btn.innerHTML = "X";
  li.appendChild(span);
  form.appendChild(btn);
  li.appendChild(form);
  commentsList.prepend(li);
  increaseNumber();
};

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });
  if (response.status === 200) {
    addComment(comment);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = commentsForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

const init = () => {
  commentsForm.addEventListener("submit", handleSubmit);
};

if (commentsForm) {
  init();
}
