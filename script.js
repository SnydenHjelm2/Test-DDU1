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

function redBet() {
    let userBet = red.value 
    var num = Math.floor(Math.random() * 37)

    if (userBet <= 0) {
        infoPara.innerHTML = `Your bet must be higher than 0! Try again.`
    } else if (userBet > balance) {
        infoPara.innerHTML = `Your bet is more than your balance! Try again!`
    } else {
        if (num === 0 || num === 36) {
            infoPara.innerHTML = `You lost! The colour was green.<br>The number was ${num}`
            balance = balance - userBet
            balanceHTML.innerHTML = `Balance: ${balance}`
            red.value = ""
        } else if (num > 17) {
            infoPara.innerHTML = `You lost! The colour was black.<br>The number was ${num}`
            balance = balance - userBet
            balanceHTML.innerHTML = `Balance: ${balance}`
            red.value = ""
        } else {
            balance = balance - userBet
            infoPara.innerHTML = `You Won! The colour was red.<br>The number was ${num}`
            userBet = userBet * 2
            balance = balance + userBet
            balanceHTML.innerHTML = `Balance: ${balance}`
            red.value = ""
        }
    }

    
}