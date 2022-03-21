let input;
let canvas;
let context;

document.addEventListener('DOMContentLoaded', function (e) {
    input = document.getElementById('hex');

    canvas = document.getElementById('colorCanvas');

    context = canvas.getContext('2d');
    context.fillStyle = "#ff0000";
    context.fillRect(0, 0, 200, 200);
})


document.getElementById("setColorForm").addEventListener("submit", function (e) {
    console.log(input.value)
    context.fillStyle = input.value;
    context.fillRect(0, 0, 200, 200)
    e.preventDefault();
});