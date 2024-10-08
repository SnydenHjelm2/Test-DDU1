var red = document.querySelector("#red")
var black = document.querySelector("#black")
var green = document.querySelector("#green")
var redB = document.querySelector("#red-b")
var blackB = document.querySelector("#black-b")
var greenB = document.querySelector("#green-b")
var infoPara = document.querySelector("#info-para")
var balanceHTML = document.querySelector("#balance")
var reset = document.querySelector("#reset")
var balance = 1000

balanceHTML.innerHTML = `Balance: ${balance}`

redB.addEventListener("click", redBet)
blackB.addEventListener("click", blackBet)
greenB.addEventListener("click", greenBet)
reset.addEventListener("click", resetBalance)