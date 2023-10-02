
const form = document.getElementById("create-task-form");
const tasksList = document.getElementById("tasks");

form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const taskDescription = document.getElementById("new-task-description").value;

  const listItem = document.createElement("li");
  listItem.textContent = taskDescription; 

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", function() {
    listItem.remove(); 
  });

  tasksList.appendChild(listItem);

  listItem.appendChild(deleteButton);


  document.getElementById("new-task-description").value = "";

});
