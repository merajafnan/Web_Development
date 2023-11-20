
function playSound(userChosenColor){
    var audio = new Audio("sounds/" + userChosenColor + ".mp3");
    audio.play();
}

function nextSequence(){
    userClickPattern = []
    level++
    $(".tittle").text('Level '+level)
    var randomNumber = Math.floor(Math.random()*4)
    var randomChosenColor = buttonColor[randomNumber]
    gamePattern.push(randomChosenColor)
}

function startOver(){
    gamePattern = []
    started = false
    level = 0
}

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] == userClickPattern[currentLevel])
    {
        if (gamePattern.length == userClickPattern.length){
            setTimeout(function(){
                nextSequence()
            },1000)
        }
    }

    else{
        playSound(wrong)
        $('body').addClass("gameOver")
        $('.tittle').text('Game Over, Press Any Key to Restart')

        setTimeout(function(){
            $('body').removeClass("gameOver")
        },1000)

        startOver()
    }
}





var buttonColor = ['red','blue','green','yellow']
var gamePattern = []
var userClickPattern =[]
var started = false
var level = 0

$("button").click(function(){
    var userChosenColor = $(this).attr("class")
    console.log(userChosenColor);

    playSound(userChosenColor)
        console.log(userClickPattern.length-1);
    checkAnswer(userClickPattern.length-1)
})


