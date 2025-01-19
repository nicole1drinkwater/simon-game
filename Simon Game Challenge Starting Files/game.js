buttonColours = ["red","blue","green","yellow"];
gamePattern = [];

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

