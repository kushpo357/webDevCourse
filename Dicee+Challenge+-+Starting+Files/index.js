
// alert("hello");
var rand1 = Math.floor(Math.random()*6) + 1;
var rand2 = Math.floor(Math.random()*6) + 1;

document.querySelector(".img1").setAttribute("src", "./images/dice" + rand1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + rand2 + ".png");

var heading = document.querySelector('h1');
if(rand1 === rand2)
{
    heading.textContent = 'Draw!';
}
else if(rand1 > rand2)
{
    heading.textContent = "Player 1 Wins!";
}
else{
    heading.textContent = "Player 2 Wins!";
}