buttonColours = ["red","blue","green","yellow"];
gamePattern = [];
userClickedPattern = [];

function nextSequence() {
    var randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber * 4);
    return randomNumber;
}

var randomChosenColour = nextSequence();

switch (randomChosenColour) {
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

function playSound(colour) {
    var audio = new Audio('./sounds/' + colour + '.mp3');
    audio.play();
}

playSound(randomChosenColour);
$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

}


$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

});
//

