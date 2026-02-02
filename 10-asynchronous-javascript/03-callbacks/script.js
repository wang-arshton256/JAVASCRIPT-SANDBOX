// function toggle(e) {
//     e.target.classList.toggle("danger")
// }

// document.querySelector('button').addEventListener('click', toggle);


// Array of posts
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

// Fucntion to create a new post and after that execute a callback
function createPost(post, cb) {
    setTimeout(() => {
        posts.push(post)
        cb();
    }, 2000);
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
 


// Calling createPost with a new post and getPosts as callback
    createPost({ title: 'Post Three', body: 'This is post' }, getPosts);

     