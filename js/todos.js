function loadTodo(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data))
}
function displayTodos(todos){
    const todosContainer = document.getElementById('todo-container');
    for(const todo of todos){
        console.log(todo)
        const div = document.createElement('div');
        div.classList.add('style')
        div.innerHTML = `
            <h2>is completed: ${todo.completed === true ? 'completed' : 'not complete'}</h2>
            <h4>Id: ${todo.id}</h4>
            <h3>title: ${todo.title}</h3>
            <h5>UserId: ${todo.userId}</h5>
        `
        todosContainer.appendChild(div);
    }
}
loadTodo()

