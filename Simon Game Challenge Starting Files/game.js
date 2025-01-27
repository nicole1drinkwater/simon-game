buttonColours = ["red","blue","green","yellow"];
gamePattern = [];
userPatternThusFar = [];
userClickedPattern = [];
wrong = false;

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
    }, 200);
}

function gameOver() {
    var audio = new Audio('./sounds/wrong.mp3');
    audio.play();

    level = 0;
    gamePattern = [];
    userPatternThusFar = [];
    userClickedPattern = [];

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
    debugger;
    if (level == 0) {
        gameOver();
    }
    else {

        if (wrong == true) {
            wrong = false;
        }

        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);

        gamePatternLength = gamePattern.length;
        userClickedPatternLength = userClickedPattern.length;
        
            if (userClickedPatternLength != gamePatternLength) {
                for (var i = 0; i < (gamePatternLength - userClickedPatternLength); i++) {

                    userClickedPattern.push(userClickedPatternThusFar[i])
                    userClickedPattern = userPatternThusFar;
                    userClickedPatternThusFar = [];

                    var userChosenColour = $(this).attr("id");
                    userClickedPattern.push(userChosenColour);
                    playSound(userChosenColour);
                    animatePress(userChosenColour);

                    if (userClickedPattern[i] != gamePattern[i]) {
                        wrong = true;
                        gameOver();
                        break;
                    }

                    

                }
            }

            for (var i = 0; i < gamePatternLength;i ++) {
                if (userClickedPattern[i] != gamePattern[i]) {
                    wrong = true;
                    gameOver();
                    break;
                }
            }
            
            if (wrong == false) {
                pushColour();
                userPatternThusFar = userClickedPattern;
                userClickedPattern = [];
                followSequence((gamePatternLength)+1);
            }
            
    }
});

$(document).keydown(function(event) {
    if (event.key == "a" && level == 0)
    {
        pushColour();
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
            }, 500 * index); // Delay each step by 500ms
        })(i);
    }
}
    if (level == 0) {
        $("h1").text("Press A Key to Start");

        
    }




