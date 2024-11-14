const getTodoList = async () => {
    fetch("http://localhost:8080/long")
    return await fetch("http://localhost:8080/api/tasks")
}

const deleteTodoList = async (id) => {
    return await fetch(`http://localhost:8080/api/tasks/${id}`, {
        method: "DELETE"
    })
}

const fillList = async () => {
    const todoList = await getTodoList();
    const todoListJson = await todoList.json();
    const list = document.getElementById("list");
    
    taskList = todoListJson.tasks;

    taskList.sort((a, b) => {
        return new Date(a.due) - new Date(b.due);
    });

    list.innerHTML = ""
    taskList.forEach(task => {
        const li = document.createElement("li")
        const text = document.createElement("span")
        text.innerText = `\t${task.name}`

        date = new Date(task.due)
        const due = document.createElement("span");
        due.classList.add("due-date");
        due.innerText = `\t${date.toLocaleDateString()}`;

        const deleteButton = document.createElement("button")
        deleteButton.innerText = "x"
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", async () => {
            await deleteTodoList(task.id)
            fillList()
        });
        li.appendChild(deleteButton);
        li.appendChild(text);
        li.appendChild(due);
        li.classList.add("todo-item");
        if (date < new Date()) {
            li.classList.add("over-due");
        }
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
    let due = document.getElementById("due").value; 

    if (due === "") {
        alert("Please enter a due date");
        return;
    }

    due = new Date(due).toISOString();
    if (name === "") {
        alert("Please enter a task name");
        return;
    }

    const task = {
        name,
        due,
    }
    await postTodoList(task);
    fillList();
    document.getElementById("name").value = "";
    document.getElementById("due").value = "";
};

fillList()