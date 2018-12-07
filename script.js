var divbox = [];

window.onload = function createBlocks() {
    for (var i = 0; i < 20 ; i++) {  
        divbox[i] = document.createElement('div');
        divbox[i].style.color = getRandomColor();
        divbox[i].style.backgroundColor = getRandomColor();
        divbox[i].innerText = i+1;
        document.body.append(divbox[i]);
    }

}

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + " " + g + " " + b + ")";
}

document.getElementById('clickToChange').onclick = function changeColor() {
    for (i = 0; i < divbox.length; i++) {
        divbox[i].style.backgroundColor = getRandomColor();
        divbox[i].style.color = getRandomColor();
    }
}