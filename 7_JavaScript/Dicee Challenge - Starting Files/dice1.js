var randomCount1 = (Math.floor(Math.random() * 6)+1)
var randomCount2 = (Math.floor(Math.random() * 6)+1)

randomImage1 = "./images/dice" + randomCount1 + ".png"
randomImage2 = "./images/dice" + randomCount2 + ".png"


var firstImage = document.querySelectorAll("img")[0]
var secondImage = document.querySelectorAll("img")[1]

// Chenge the image with random image - ./images/dice1.png

firstImage.setAttribute('src', randomImage1)
secondImage.setAttribute('src', randomImage2)

// Display Winner

if (randomCount1 > randomCount2){
    document.querySelector('h1').innerHTML = "Player 1 Wins 🏆"
}
else if (randomCount1 < randomCount2){
    document.querySelector('h1').innerHTML = "Player 2 Wins 🏆"
}
else{
    document.querySelector('h1').innerHTML = "Draw - Please Refresh Again 🎟️"
}





