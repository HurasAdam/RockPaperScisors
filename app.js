const playerPointsSpan = document.querySelector('.player-points');
const computerPointsSpan = document.querySelector('.computer-points');
const optionsButtons= document.querySelectorAll('.options button')
const choicesSection=document.querySelector('.choices');
const playerChoicespan= document.querySelector('.player-choice');
const computerChoicespan= document.querySelector('.computer-choice');
const resultText = document.querySelector('.result-text');
const resetGameButton= document.querySelector('.reset-game')
const resetPointsButton= document.querySelector('.reset-points');

let playerPoints = 0;
let playerChoice='';
let compPoints =0;
let compChoice = '';


function setGame(){
    playerPointsSpan.innerHTML= playerPoints;
    computerPointsSpan.innerHTML= compPoints;
    resultText.innerHTML= 'choose wisely';
    resetGameButton.classList.remove('active');
    resetPointsButton.classList.remove('active');
}
window.onload= setGame();


function playerSelect(event){
optionsButtons.forEach((button)=>button.classList.remove('active'))
    playerChoice=event.target.dataset.option;
event.target.classList.add('active');

resetGameButton.classList.add('active');
resetPointsButton.classList.add('active');



compSelect();
}

function compSelect(){
const avalibleCompChoices=['ROCK','PAPER','SCISSORS']
const randomIndex= Math.floor(Math.random()*avalibleCompChoices.length);
compChoice= avalibleCompChoices[randomIndex];


checkResult();
}

// checking who won//
function checkResult(){
    let winner=''

    if(playerChoice==='ROCK'&& compChoice==='SCISSORS' ||playerChoice==='PAPER'&&compChoice==='ROCK' ||playerChoice==='SCRISSORS'&& compChoice==='PAPER'){
        resultText.classList.add('player');
        winner= 'YOU WON!'
        playerPoints++;
        playerPointsSpan.innerHTML=playerPoints;
    }
    else if (playerChoice===compChoice){
        winner='DRAW!'
    }
    else{
        resultText.classList.add('computer')
        winner='YOU LOST!'
        compPoints++;
        computerPointsSpan.innerHTML=compPoints;
    }
   choicesSection.classList.add('active');
    playerChoicespan.innerHTML=playerChoice;
   computerChoicespan.innerHTML=compChoice;
   resultText.innerHTML=winner;
   
}

//Game Reset//
function resetGame(){
    resultText.classList.remove('player');
    resultText.classList.remove('computer');
    choicesSection.classList.remove('active');
    resultText.innerHTML='Chose wisely'
    optionsButtons.forEach((button)=>button.classList.remove('active'));
    setGame();
}

//Points reset//
function resetPoints(){
    playerPoints=0;
    compPoints=0;
    choicesSection.classList.remove('active');
    resultText.classList.remove('player');
    resultText.classList.remove('computer');
    optionsButtons.forEach((button)=>button.classList.remove('active'));
    setGame();
}

//buttons listeners//
optionsButtons.forEach((button)=>{
    button.addEventListener('click',playerSelect);
})

resetGameButton.addEventListener('click',resetGame);
resetPointsButton.addEventListener('click',resetPoints);


