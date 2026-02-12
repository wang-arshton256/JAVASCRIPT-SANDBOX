class App{
    constructor() {
        this.serverName = 'localhost';

        document
            .querySelector('button')
            .addEventListener('click', this.getServerName.bind(this))
    }

    getServerName() {
        console.log(this.serverName);
    }
}

getServerName();
const app = new App();
// app.getServerName();

