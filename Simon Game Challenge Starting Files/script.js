let gameover = true;
let colors = ["green", "red", "yellow", "blue"];
let seq = [];
let num = 0;

$(document).on("keydown", () => {
    if (gameover) {
        gameover = false;
        startGame(1);
    }
});

$('.btn').click(function () {
    if (gameover) {
        triggerWrongBuzz();
    } else {
        let currbtn = colors.indexOf($(this).attr("id"));
        if (seq[num] !== currbtn) {
            triggerWrongBuzz();
        } else {
            pressButton(currbtn);
            num++;
            if (num === seq.length) {
                num = 0;
                startGame(seq.length + 1);
            }
        }
    }
});

function updateSequence() {
    let newval = Math.floor(Math.random() * 4);
    seq.push(newval);
    setTimeout(() => pressButton(newval), 1000);
}

function startGame(level) {
    $('#level-title').text(`Level ${level}`);
    updateSequence();
}

function pressButton(index) {
    let audio = new Audio(`./sounds/${colors[index]}.mp3`);
    audio.play();
    
    $(`.${colors[index]}`).addClass("pressed");
    setTimeout(() => $(`.${colors[index]}`).removeClass("pressed"), 100);
}

function triggerWrongBuzz() {
    let audio = new Audio("./sounds/wrong.mp3");
    audio.play();
    
    $("body").addClass('game-over');
    setTimeout(() => $("body").removeClass("game-over"), 100);
    
    $('#level-title').text("Game Over, Press Any Key to Restart");
    num = 0;
    seq = [];
    gameover = true;
}
