let task_id = 0

function addNewTask(addNewTaskDescrip, addNewTaskPriority, thisList) {
	event.preventDefault()
	task_id += 1
	let newTask = document.createElement("li")
	newTask.dataset["id"] = `${task_id}`
	newTask.className = "list-item"
	newTask.innerHTML = `
	<button data-id=${task_id} class="delete-item">x</button>
	${addNewTaskDescrip.value}, ${addNewTaskPriority.value} 
	`
	thisList.appendChild(newTask)
  
  //clear form
  addNewTaskPriority.value = ""
  addNewTaskDescrip.value = ""
}