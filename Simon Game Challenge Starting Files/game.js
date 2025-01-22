buttonColours = ["red","blue","green","yellow"];
gamePattern = [];
userClickedPattern = [];

var level = 0;

function nextSequence() {
    level++;
    $("h1").text("Level " + level);

    var randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber * 4);

    return randomNumber;
}

function playSound(colour) {
    var audio = new Audio('./sounds/' + colour + '.mp3');
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function gameOver() {
    $("body").addClass("game-over");


    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 100);

    $("h1").text("Game Over, Press Any Key to Restart");
}

$(".btn").click(function() {

    if (level == 0) {
        var audio = new Audio('./sounds/wrong.mp3');
        audio.play();

        gameOver();
    }
    else {
        colourNumber = nextSequence();

        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
    }
    

});

$(document).keydown(function(event) {

    if (event.key == "a" && level == 0)
    {
        nextSequence();
    }
});
//

