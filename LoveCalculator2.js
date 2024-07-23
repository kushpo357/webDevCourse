let namestr = prompt('Enter two name seperated by a comma to calculate their love Percentage');
let names = namestr.split('-');
var lovePercentage = Math.floor(Math.random()*100) + 1;

if(lovePercentage > 70)
{
    alert("Congratulations!! your love score is a fabulous " + lovePercentage);
}
else if(lovePercentage > 30)
{
    alert("Your love score is " + lovePercentage);
}
else
{
    alert("Oof! your love score is " + lovePercentage);
}
