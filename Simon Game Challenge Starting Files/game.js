buttonColours = ["red","blue","green","yellow"];
gamePattern = [];
userClickedPattern = [];
wrong = true;

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

function pushColour() {
    colourNumber = nextSequence();

        switch (colourNumber) {
            case 0:
                randomChosenColour = "red";
                break;
        
            case 1:
                randomChosenColour = "blue";
                break;
            
            case 2:
                randomChosenColour = "green";
                break;
            
            case 3:
                randomChosenColour = "yellow";
                break;
        
            default:
                break;
        }

        gamePattern.push(randomChosenColour);
}



$(".btn").click(function() {

    if (level == 0) {
        var audio = new Audio('./sounds/wrong.mp3');
        audio.play();

        gameOver();
    }
    else {
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
    }
    

});

$(document).keydown(function(event) {

    if (event.key == "a" && level == 0)
    {
        pushColour();
        console.log(gamePattern[0]);
        followSequence(1);

    }
});
//
//WORKS LIKE A SCREENSHOT
function followSequence(arrayLength){
    for (var i = 0; i < arrayLength; i++) {
        (function(index) {
            setTimeout(function() {
                var colour = gamePattern[index];
                playSound(colour);
                animatePress(colour);
            }, 1000 * index); // Delay each step by 500ms
        })(i);
    }
}
//ACTUAL CODE
    if (level == 0) {
        $("h1").text("Press A Key to Start");

        console.log(gamePattern[0]);

        while (wrong == false) {
            for (var i = 0; i < gamePattern.length;i ++) {
                if (userClickedPattern[i] != gamePattern[i]) {
                    console.log("hi");
                    gameOver();
                    wrong == true;
                }
                else {
                    console.log("bye");
                    pushColour();
                    followSequence((gamePattern.length)+1);
                }
            }
        }
    }




