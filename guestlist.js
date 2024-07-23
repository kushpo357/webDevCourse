var guestlist = ["Angela", "James", "Pam", "Jack", "Lisa", "Jason"];

var guest = prompt("Please, Enter your Name");

if(guestlist.includes(guest))
{
    alert("Welcome!!");
}
else
{
    alert("Sorry, maybe next time");
}