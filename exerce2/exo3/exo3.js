var my_div = document.getElementById("my_div");
var depart = 50;
var widhtsquare = 20;
var heightquare = 20;
var x = 1;
var y = 1;
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var snek = [
    [2, 3],
    [3, 3],
    [4, 3],
    [5, 3],
    [6, 3]
];

function drow(my_table) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    my_table.forEach(cle => {
        const [x, y] = cle;
        context.fillStyle = "orange";
        context.fillRect(x * widhtsquare, y * heightquare, widhtsquare, heightquare);
    });
}

setInterval(() => {
    snek.shift();
    var last = snek[snek.length - 1];
    snek.push([last[0] + 1, last[1]]);
    console.log(snek);
    drow(snek);
}, 500);

drow(snek);










// context.fillStyle = "rgb(255, 255, 0)";
// context.fillRect(x * widhtsquare, y * heightquare, widhtsquare, heightquare);


// for (var i = 0; i < snek.length; i++) {
//     const [x, y] = snek[i];
//     context.fillStyle = "rgb(255, 255, 0)";
//     context.fillRect(x * widhtsquare, y * heightquare, widhtsquare, heightquare);
// }





// document.body.addEventListener("keydown", (e) => {
//     if (e.keyCode == 32) {
//         my_div.style.transform += "translate(25px,10px)";
//     }
//     console.log(e.keyCode);
// });

