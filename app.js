let text = document.querySelector(".text");
let btn = document.querySelector(".btn");
let addList = document.querySelector(".add-list-btn");
let inputList = document.querySelector(".input-list");

btn.addEventListener("click", function () {
  text.classList.toggle("change");
});

const userList = document.querySelector(".name-list");

// for (user of userList) {
//   user.addEventListener("click", function () {
//     this.classList.toggle("change");
//   });
// }

addList.addEventListener("click", function () {
  let newLI = document.createElement("LI");
  const LIContent = document.createTextNode(inputList.value);
  newLI.appendChild(LIContent);
  userList.appendChild(newLI);
});