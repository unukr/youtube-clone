import axios from "axios";

const commentsRemoveForm = document.querySelectorAll(
  ".video__comments-form"
);
const commentsNumber = document.getElementById("jsCommentsNumber");

const decreaseNumber = () => {
  commentsNumber.innerHTML =
    parseInt(commentsNumber.innerHTML, 10) - 1;
};

const removeFakeComment = (id) => {
  document.getElementById(`${id}`).remove();
  decreaseNumber();
};

const removeComment = async (commentId) => {
  const response = await axios({
    url: `/api/${commentId}/remove-comment`,
    method: "POST",
  });
  if (response.status === 200) {
    removeFakeComment(commentId);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentId = event.target.parentNode.id;
  removeComment(commentId);
};

const init = () => {
  for (const ele of commentsRemoveForm) {
    ele.addEventListener("submit", handleSubmit);
  }
};

if (commentsRemoveForm) {
  init();
}
