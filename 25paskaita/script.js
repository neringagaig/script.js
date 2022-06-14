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
        const todos = response.slice(0, 5);
        //paimam 10 itemu is viso masyvo
        //rodo pirma objekta is masyvo
        todos.forEach((todo) => renderTodo(todo));
    })
    .catch((error) => {
        console.error(error);
    });

//POST METODAS, NAUDJOAMAS KAI NORIMA ISSIUSTI DUOMENIS
//FETCH KAI NORI GAUTI DUOMENIS
const handleAddTodo = () => {
    const todoText = document.querySelector('input[name="todo-text"]');
    
    const newTodo = {title: todoText.value, completed: false};

    const params = {
        method: "POST",
        body: JSON.stringify(newTodo),
        //pakeiciam atgal formata, kad backendas suprastu kas yr kas
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }//tai yra parametras skirtas duomenu ikelimui i serveri, kuris rasosi prie fetcho

fetch('https://jsonplaceholder.typicode.com/todos', params)
    .then(resp => resp.json())
    .then(response => {
        renderTodo(newTodo);
        todoText.value = "";
        console.log(response)
    })
    .catch((error) => {
        console.error(error);
    })

    
};

const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", handleAddTodo);




      