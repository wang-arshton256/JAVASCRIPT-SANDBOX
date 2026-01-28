// function toggle(e) {
//     e.target.classList.toggle("danger")
// }

// document.querySelector('button').addEventListener('click', toggle);


// Array of posts
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

// Fucntion to create a new post using callback to promise
function createPost(post, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            let error = false;

            if (!error) {
                 posts.push(post)
        resolve();
            } else {
                reject('Something went wrong');
            }
       
    }, 2000);
});
};

// Function to get posts and display them on the DOM
function getPosts() {
    setTimeout(() => {
        posts.forEach(function(post) {
            const div = document.createElement('div');
            div.innerHTML = `<strong> ${post.title} </strong> - ${post.body}`;
            document.querySelector('#posts').appendChild(div);
        });
    }, 1000);
}
 

function showError(error){
    const h3 = document.createElement('h3');
    h3.innerHTML = `<strong>${error}</strong>`;
    document.getElementById('posts').appendChild(h3);
}

// Calling createPost with a new post and getPosts as callback
createPost({ title: 'Post Three', body: 'This is post' })

// Catching errors
    .then(getPosts)
    .catch(showError);

     