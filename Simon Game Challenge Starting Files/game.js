let level = 0;
let gameover = true;
let gamePattern = [];
let userClickedPattern = [];
let buttonColours = ["green", "red", "yellow", "blue"];

function startOver()
{
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}
function checkAnswer(currentLevel)
{
    if(gamePattern[currentLevel] != userClickedPattern[currentLevel])
    {
        gameover = true;
        let audio = new Audio('./sounds/wrong.mp3');
        // audio.play();
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
        // console.log("wrong");
    }
    else
    {
        // console.log("right");
        if(level == currentLevel + 1)
        {
            userClickedPattern = [];
            setTimeout(nextSequence(), 10000);
        }
    }
}

$(document).on("keydown", () => {
  if (gameover) {
    gameover = false;
    $("#level-title").text("level 0");
    nextSequence();
  }
});

$(".btn").click(function () {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  pressButton(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
  level++;
  $("#level-title").text("level " + level);
  let randomNumber = Math.floor(Math.random() * 3);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  pressButton(randomChosenColour);
}

function pressButton(colour) {
  let audio = new Audio("./sounds/" + colour + ".mp3");
//   audio.play();
  $("#" + colour).addClass("pressed");
  setTimeout(() => {
    $("#" + colour).removeClass("pressed");
  }, 100);
}
