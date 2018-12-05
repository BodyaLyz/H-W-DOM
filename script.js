var divbox = [];

window.onload = function blockCreation() {
    for (var i = 0; i <= 19; i++) {  
        divbox[i] = document.createElement('div');
        divbox[i].style.backgroundColor = randomColor();
        divbox[i].innerText = i+1;
        divbox[i].style.color = randomColor();
        document.body.append(divbox[i]);
    }

}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + " " + g + " " + b + ")";
}

function changeColor() {
    for (i = 0; i < divbox.length; i++) {
        divbox[i].style.backgroundColor = randomColor();
        divbox[i].style.color = randomColor();
    }
}