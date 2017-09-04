function addNewTaskForm() {
	
	const newForm = document.createElement("form")
	newForm.id = "add-task-form"
	newForm.innerHTML = `
	<label>Select List:</label>
	<select></select>
	<label>Task Description:</label>
	<input type="text" id="new-task-description"></input>
	<label>Priority:</label>
	<input type="text" id="new-task-priority"></input>
	<input type="submit" value="(+) add">
	`
	const formContainer = document.getElementById("form-container")
	formContainer.appendChild(newForm)
}