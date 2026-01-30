const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'John', age: 20 });
  }, 1000);
});

// promise.then((data) => console.log(data));


// creating a async function
async function getPromoise() {
  const response = await promise;
  console.log(response);
}
// getPromoise();

// creating a async function to fetch data from an API
async function getUsers() {
  const res = await fetch('http://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}
getUsers();