let namestr = prompt('Enter two name seperated by a comma to calculate their love Percentage');
let names = namestr.split('-');
var lovePercentage = Math.floor(Math.random()*100) + 1;
alert("The love Percentage between " + names[0] + " and " + names[1] + " is " + lovePercentage);