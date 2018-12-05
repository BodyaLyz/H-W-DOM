var divbox = [];

window.onload = function createBlocks() {
    for (var i = 0; i < 20 ; i++) {  
        divbox[i] = document.createElement('div');
        divbox[i].style.backgroundColor = getRandomColor();
        divbox[i].innerText = i+1;
        divbox[i].style.color = getRandomColor();
        document.body.append(divbox[i]);
    }

}

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + " " + g + " " + b + ")";
}

function changeColor() {
    for (i = 0; i < divbox.length; i++) {
        divbox[i].style.backgroundColor = getRandomColor();
        divbox[i].style.color = getRandomColor();
    }
}