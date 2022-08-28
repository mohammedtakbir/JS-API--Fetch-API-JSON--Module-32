/* function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
        // .catch(console.log('not found the api'))
        // console.log('test')
} */

/* function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
    // .catch(console.error('server not found'))
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}
function displayUsers(users){
    console.log(users)
} */

function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data))
}
function displayUsers2(users){
    const usersList = document.getElementById('users-list');
    for(const user of users){
        const li = document.createElement('li');
        li.innerText = user.name;
        usersList.appendChild(li)
    }
}

