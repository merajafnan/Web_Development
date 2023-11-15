function life(currentAge,maxAge){
    ageLeftOver = 90-currentAge
    alert("You have " + (ageLeftOver*365) + ', ' + (ageLeftOver*52) + ' weeks, and ' + (ageLeftOver*12) + ' months left.')
}

function bmi(height,weight){
    bmi_eqation = (weight)/(Math.pow(height,2))
    alert("Your BMI is: "+bmi_eqation)
}

function leap(year){
    if (year % 4 != 0){
        alert("Not a Leap Year")
    }
    else{
        if (year % 100 != 0){
            alert("Leap Year")
        }
        else{
            if (year % 400 == 0){
                alert("Leap Year")
            }
            else{
                alert("Not a Leap Year")
            }
        }
    }
}

function buyLunch(personList){
    var lengthPersonList = personList.length
    var randomPosition = Math.random() * lengthPersonList
    randomPosition = Math.floor(randomPosition)
    alert(personList[randomPosition])
}

function fibo(range){
    var first = 0
    var second = 1
    const fiboArray = [0,1]

    for (let i=0; i<range; i++)
    {
        var sum = (first+second)
        fiboArray.push(sum)
        first = second
        second = sum
    }
    alert(fiboArray)
}


userInput = prompt("What Do you want to perform: \n    Press 1 for Life Expectency\n    Press 2 for BMI\n    Press 3 to check for Leap Year\n    Press 4 to check Who Buys Lunch\n    Press 5 for Fibo Series\n")

if (userInput == 1) {
    currentAge = prompt("Enter Your Present Age");
    maxAge = 90;
    life(currentAge,maxAge)
}

if (userInput == 2) {
    height = prompt("Enter your Height in meter");
    weight = prompt("Enter your Weight in Kg");
    bmi(height,weight)
}

if (userInput == 3){
    year = prompt("Enter Year you want to check for Leap Year")
    leap(year)
}

if (userInput == 4){
    const personList = []
    countPerson = prompt("Enter teh number of person")
    for (let i=0; i < countPerson; i++ ) 
    {
        namePerson = prompt("Enter name of person number " + (i+1))
        personList.push(namePerson)
    }
    buyLunch(personList)
}

if (userInput == 5){
    var range = prompt("Enter range of Fibonachi seq")
    fibo(range)
}



