let gameover = true;
let colors = ["green", "red", "yellow", "blue"];
let seq = [];
let num = 0;
$(document).on("keydown", function(){
    if(gameover)
    {
        gameover = false;
        starter(1);
    }
});

$('.btn').click(function (){
    if(gameover)
        wrongBuzz();
    else
    {
        let currbtn = colors.indexOf($(this).attr("id"));
        if(seq[num] != currbtn)
        {
            wrongBuzz();
        }
        else
        {
            pressButton(currbtn);
            num++;
            if(num == seq.length)
            {
                num = 0;
                starter(seq.length + 1);
            }
        }
    }
});

function updateSequence()
{
    let newval = Math.round(Math.random()*3);
    setTimeout(() => {
        pressButton(newval);
        seq.push(newval);
    }, 1500);
    
}
function starter(level)
{
    $('#level-title').text("level " + level);
    updateSequence();
}

function pressButton(ind)
{
    let audio = new Audio("./sounds/" + colors[ind] + ".mp3");
    audio.play();

    $("." + colors[ind]).addClass("pressed");
    setTimeout(() => {$("." + colors[ind]).removeClass("pressed");}, 100);
}
    
function wrongBuzz()
{
    let audio = new Audio("./sounds/wrong.mp3");
    audio.play();
    $("body").addClass('game-over');
    setTimeout(() => {$("body").removeClass("game-over")}, 100);
    $('#level-title').text("Game Over, Press Any Key to Restart");
    num = 0;
    seq = [];
    gameover = true;
}
