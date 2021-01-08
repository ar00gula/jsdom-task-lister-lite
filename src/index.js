document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("submit-button").addEventListener('click', function(event) {
    event.preventDefault();
    //prevent default
    let li = document.createElement('li');
    let deleteButton = document.createElement("input");
        deleteButton.type = 'button';
        deleteButton.value = 'x';
        deleteButton.id = 'delete-button';
        //create delete button and li

    let task = document.getElementById("new-task-description");
    li.innerHTML = task.value;
    li.id = "list-item";
    document.getElementById("tasks").appendChild(li).appendChild(deleteButton);
    task.value = "";

    deleteButton.addEventListener('click', function() {
      deleteButton.parentElement.remove();
    });
  });
  
});



