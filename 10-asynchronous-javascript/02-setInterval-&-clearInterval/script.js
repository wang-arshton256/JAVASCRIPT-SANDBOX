// const intervalID = setInterval(myCallBack, 1000);

//     function myCallBack() {
//         console.log(Date.now());
//     }

let intervalID;

function startChange() {
    if (!intervalID) {
        intervalID = setInterval(changeColor, 3000);
        
    }
}

function changeColor() {
    const newRandomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + newRandomColor;
}


function stopchange() {
    clearInterval(intervalID);
}



document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopchange);

