function comments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}

function displayComments(comments) {
    const commentsContainer = document.getElementById('coments-container');
    for (const comment of comments) {
        console.log(comment)
        const div = document.createElement('div');
        div.classList.add('style')
        div.innerHTML = `
            <h3>Comment: ${comment.body}</h3>
            <h6>Id: ${comment.id}</h6>
            <h5>Name: ${comment.name}</h5>
            <h6>Email: ${comment.email}</h6>
            <h6>PostId: ${comment.postId}</h6>
        `;
        commentsContainer.appendChild(div)
    }
}

comments()