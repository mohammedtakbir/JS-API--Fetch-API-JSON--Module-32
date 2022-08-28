function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}
function displayPost(posts){
    const postContainer = document.getElementById('posts-container');
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('style')
        div.innerHTML = `
            <h4>Id: ${post.id}</h4>
            <h3>title: ${post.title}</h3>
            <h5>post: ${post.body}</h5>
        `;
        postContainer.appendChild(div);
    }
}





loadPost()