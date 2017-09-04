document.addEventListener("DOMContentLoaded", function () {

	const formContainer = document.getElementById("form-container")

	const addNewListInput = document.getElementById("add-list-input")
	const listsContainer = document.getElementById("lists-container")
	

	formContainer.addEventListener("submit", () => {
		if (event.target.id === "add-list-form") {
		addNewList(addNewListInput)
		} else if (event.target.id === "add-task-form") {
				const allLists = [...document.querySelectorAll(".list")]
				let thisList
				allLists.forEach(function(list) {
					if (list.dataset["id"] === event.target.elements[0].value) {
						thisList = list.getElementsByTagName("ul")[0]
					}
				})
				const addNewTaskDescrip = document.getElementById("new-task-description")
				const addNewTaskPriority = document.getElementById("new-task-priority")
				addNewTask(addNewTaskDescrip, addNewTaskPriority, thisList);
		}
	})

	listsContainer.addEventListener("click", (e) => {
		if (e.target.className === "delete-list"){
			let lists = [...document.querySelectorAll(".list")]
			let list = lists.find(function(list) { return list.dataset.id === e.target.dataset.id})
			let options = [...document.querySelectorAll("option")]
			let option = options.find(function(option) { return option.dataset.id === list.dataset.id})
			deleteElement(list)
			deleteElement(option)
		} else if (e.target.className === "delete-item") {
			let items = [...document.querySelectorAll(".list-item")]
			let item = items.find(function(item) { return item.dataset.id === e.target.dataset.id})
			deleteElement(item)
		}
	})

})