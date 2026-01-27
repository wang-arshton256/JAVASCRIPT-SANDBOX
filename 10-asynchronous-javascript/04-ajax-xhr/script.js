const xhr = new XMLHttpRequest();

// Passing data from movies.json file
// xhr.open('GET', './movies.json'); 

// Passing data from my github repo using HTTP
xhr.open('GET', 'http://api.github.com/users/wang-arshton256/repos');

// readyState has 5 possible values
// - 0: request not initiatlized
// - 1: server connection established
// - 2: request recieved
// - 3: processing request
// - 4: request finished and response is ready

xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        // console.log(JSON.parse(this.responseText));

        const data = JSON.parse(this.responseText);

        data.forEach((movie) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
            document.querySelector('#results').appendChild(li);
            
        });
    }
};

// Passing data from my github repo using HTTP
xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        // console.log(JSON.parse(this.responseText));

        const data = JSON.parse(this.responseText);

        data.forEach((repo) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${repo.title}</strong> - ${repo.description}`;
            document.querySelector('#results').appendChild(li);
            
        });
    }
};

xhr.send();

