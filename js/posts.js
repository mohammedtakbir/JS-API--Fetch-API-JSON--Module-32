function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}

function displayPosts(posts) {
    const postContainer = document.getElementById('posts-container');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
            <h4>user: ${post.id}</h4>
            <h5>post: ${post.title}</h5>
            <p>post description: ${post.body}</p>
        `;
        postContainer.appendChild(div)
    }
}
loadPosts();
