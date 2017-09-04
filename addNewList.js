let listId = 0

function addNewList(formInput) {
	event.preventDefault();
	const listContainer = document.getElementById("lists-container")
	listId += 1
	
	const newList = document.createElement("div")
	newList.dataset["id"] = `${listId}`
	newList.className = "list"
	newList.innerHTML = 
	`<h2 data-id="${listId}">
			<button data-id=${listId} class="delete-list">x</button>
			${formInput.value}
		</h2>
		<ul data-id="${listId}"></ul>
	`

	listContainer.appendChild(newList)
	
	if (listId <= 1) {
		addNewTaskForm();
	}

	const newOption = document.createElement("option")
	newOption.value = `${listId}`
	newOption.dataset["id"] = `${listId}`
	newOption.innerText = `${formInput.value}`
	document.getElementById("add-task-form").getElementsByTagName("select")[0].appendChild(newOption)

	//clear form
	formInput.value = ""
}