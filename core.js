let aGoal = document.getElementById("a-score")
let bGoal = document.getElementById("b-score")
let newGameToZerp = document.getElementById("new-game")

let count=0

function AplusOne () {
    count += 1
    aGoal.textContent = count

}

function AplusTwo () {
    count += 2
    aGoal.innerText = count
}

function AplusThree () {
    count += 3
    aGoal.innerText = count

}

function BplusOne () {
    count += 1
    bGoal.textContent = count

}

function BplusTwo () {
    count += 2
    bGoal.innerText = count
}

function BplusThree () {
    count += 3
    bGoal.innerText = count

}

function newGame () {
    aGoal.innerText = count = 0
    bGoal.innerText = count = 0

}