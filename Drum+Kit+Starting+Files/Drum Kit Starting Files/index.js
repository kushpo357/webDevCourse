//detect button click
var btn = document.querySelectorAll(".drum");
for(var i = 0; i < btn.length; i++)
{
    btn[i].addEventListener("click", function () {
        audioPlay(this.innerText);
        buttonAnimation(this.innerText);
    });
}

//detect keypress
document.addEventListener("keydown", (e) => {
    audioPlay(e.key);
    buttonAnimation(e.key);
});

//make sound
function audioPlay(key){
    let audio;
    switch(key)
    {
        case "w":
            audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
    }
}

function buttonAnimation(key)
{
    let actionkey = document.querySelector("." + key);
    actionkey.classList.add("pressed");
    setTimeout(() => actionkey.classList.remove("pressed"), 100);
}