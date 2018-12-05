var createDiv = [];

window.onload = function blockCreation() {
    for (var i = 1; i <= 20; i++) {
        createDiv[i] = document.createElement('div');
        createDiv[i].style.height = "50px";
        createDiv[i].style.width = "50px";
        createDiv[i].style.backgroundColor = randomColor();
        createDiv[i].innerText = i;
        createDiv[i].style.color = randomColor();
        document.body.append(createDiv[i]);
    }

}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + " " + g + " " + b + ")";
}

function changeColor() {
    for (i = 1; i < createDiv.length; i++) {
        createDiv[i].style.backgroundColor = randomColor();
        createDiv[i].style.color = randomColor();
    }
}