
var newDiv = [];

window.onload = function blockcreation() {
    for (var i = 1; i <= 20; i++) {
        newDiv[i] = document.createElement('div');
        newDiv[i].style.height = "50px";
        newDiv[i].style.width = "50px";
        newDiv[i].style.backgroundColor = randomColor();
        newDiv[i].innerText = i;
        newDiv[i].style.color = randomColor();
        document.body.append(newDiv[i]);
    }

}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + " " + g + " " + b + ")";
}

function changecolor(){  
    for (i = 1; i < newDiv.length; i++) {
    newDiv[i].style.backgroundColor = randomColor();
    newDiv[i].style.color = randomColor();
  }
}