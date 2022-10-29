const playerPointsSpan = document.querySelector('.player-points');
const computerPointsSpan = document.querySelector('.computer-points');
const optionsButtons= document.querySelectorAll('.options button')
const playerChoicespan= document.querySelector('.player-choice');
const computerChoicespan= document.querySelector('.computer-choice');
const resultText = document.querySelector('.result-text');
const resetGameButton= document.querySelector('.reset-game')

let playerPoints = 0;
let playerChoice='';
let compPoints =0;
let compChoice = '';


function setGame(){
    playerPointsSpan.innerHTML= playerPoints;
    computerPointsSpan.innerHTML= compPoints;
    resultText.innerHTML= 'choose wisely';
}

window.onload= setGame();

function playerSelect(event){
optionsButtons.forEach((button)=>button.classList.remove('active'))
    playerChoice=event.target.dataset.option;
event.target.classList.add('active');

compSelect();
}

function compSelect(){
const avalibleCompChoices=['ROCK','PAPER','SCISSORS']
const randomIndex= Math.floor(Math.random()*avalibleCompChoices.length);
compChoice= avalibleCompChoices[randomIndex];
}


function checResult(){
    let winner=''

    if(playerChoice==='ROCK'&& compChoice==='SCISSORS' ||playerChoice==='PAPER'&&compChoice==='ROCK' ||playerChoice==='SCRISSORS'&& compChoice==='PAPER'){
        winner= 'YOU WON!'
    }
    else if (playerChoice===compChoice){
        winner='DRAW!'
    }
    else{
        winner='YOU LOST!'
    }
    console.log(winner);
}


optionsButtons.forEach((button)=>{
    button.addEventListener('click',playerSelect);
})