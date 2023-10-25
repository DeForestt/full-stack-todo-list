const getTodoList = async () => {
    return await fetch("http://localhost:8080/api/tasks")
}

const deleteTodoList = async (id) => {
    return await fetch(`http://localhost:8080/api/tasks?id=${id}`, {
        method: "DELETE"
    })
}

const fillList = async () => {
    const todoList = await getTodoList();
    const todoListJson = await todoList.json();
    const list = document.getElementById("list");
    
    // fill the taskList with the 'tasks' from the todoListJson
    taskList = todoListJson.tasks;

    list.innerHTML = ""
    taskList.forEach(task => {
        const li = document.createElement("li")
        const text = document.createElement("span")
        text.innerText = `\t${task.name}`
        const deleteButton = document.createElement("button")
        deleteButton.innerText = "x"
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", async () => {
            await deleteTodoList(task.id)
            fillList()
        });
        li.appendChild(deleteButton);
        li.appendChild(text);
        list.appendChild(li);
    });
}

const postTodoList = async (task) => {
    return await fetch("http://localhost:8080/api/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
}

const addNew = async () => {
    const name = document.getElementById("name").value;
    if (name === "") {
        alert("Please enter a task name");
        return;
    }
    const task = {
        name,
    }
    await postTodoList(task);
    fillList();
};

fillList()