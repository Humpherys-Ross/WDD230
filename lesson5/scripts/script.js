const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", () => {
  if (input.value === "") {
    return;
  }

  const li = document.createElement("li");
  const deleteButton = document.createElement("button");

  li.textContent = input.value;
  deleteButton.textContent = "❌";

  li.appendChild(deleteButton);
  list.appendChild(li);

  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  input.focus();
  input.value = "";
});
