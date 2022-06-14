const renderTodo = (todo) => {
    const {id, completed, title} = todo;
    //istraukti itemus is objekto kurie reikalingi "destruction"
    const todoEl = document.createElement("div");
    const todoTitle = document.createElement("p");
    const todoStatus = document.createElement("span");

    todoEl.className = "todo";
    todoTitle.className = "todo-title";
    todoStatus.className = completed ? "todo-status done" : "todo-status";

    todoTitle.textContent = title;

    todoEl.append(todoTitle, todoStatus);
    document.querySelector(".todo-container").prepend(todoEl);
}

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(resp => resp.json())
    .then((response) => {
        const todos = response.slice(0, 10);
        //paimam 10 itemu is viso masyvo
        //rodo pirma objekta is masyvo
        todos.forEach((todo) => renderTodo(todo));
    })
    .catch((error) => {
        console.error(error)
    });
      