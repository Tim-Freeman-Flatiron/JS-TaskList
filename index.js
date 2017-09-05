document.addEventListener("DOMContentLoaded", function () {

	const formContainer = document.getElementById("form-container")
	const addNewListInput = document.getElementById("add-list-input")
	const listsContainer = document.getElementById("lists-container")
	

	formContainer.addEventListener("submit", (e) => {
		if (e.target.id === "add-list-form") {
			addNewList(addNewListInput, listsContainer)
		} else if (e.target.id === "add-task-form") {
				const thisList = [...document.querySelectorAll(".list")].find(list => {return list.dataset.id === e.target.elements[0].value}).getElementsByTagName("ul")[0]
				const addNewTaskDescrip = document.getElementById("new-task-description")
				const addNewTaskPriority = document.getElementById("new-task-priority")
				addNewTask(addNewTaskDescrip, addNewTaskPriority, thisList);
		}
	})

	listsContainer.addEventListener("click", (e) => {
		if (e.target.className === "delete-list"){
			const list = [...document.querySelectorAll(".list")].find(list => { return list.dataset.id === e.target.dataset.id})
			const option = [...document.querySelectorAll("option")].find(option => { return option.dataset.id === list.dataset.id})
			deleteElement(list)
			deleteElement(option)
		} else if (e.target.className === "delete-item") {
			const item = [...document.querySelectorAll(".list-item")].find(item => { return item.dataset.id === e.target.dataset.id})
			deleteElement(item)
		}
	})
})