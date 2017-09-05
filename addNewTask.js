let taskId = 0

function addNewTask(addNewTaskDescrip, addNewTaskPriority, thisList) {
	event.preventDefault()
	taskId += 1
	
	let newTask = document.createElement("li")
	newTask.dataset["id"] = `${taskId}`
	newTask.className = "list-item"
	newTask.innerHTML = 
		`<button data-id=${taskId} class="delete-item">x</button>
		${addNewTaskDescrip.value}, ${addNewTaskPriority.value} 
		`
	thisList.appendChild(newTask)
  
  //clear form
  addNewTaskPriority.value = ""
  addNewTaskDescrip.value = ""
}