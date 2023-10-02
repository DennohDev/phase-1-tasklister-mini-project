
const form = document.getElementById("create-task-form");
const tasksList = document.getElementById("tasks");

form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const taskDescription = document.getElementById("new-task-description").value;

  const listItem = document.createElement("li");
  listItem.textContent = taskDescription; 

  tasksList.appendChild(listItem);

  document.getElementById("new-task-description").value = "";

});
