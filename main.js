"use strict";

function randomColor() {
    var color= '#' + Math.random().toString(16).substr(2,6);
    document.getElementById("signin").style.backgroundColor = color;
}
