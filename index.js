let p1Score = document.querySelector('#player1');
let p2Score = document.querySelector('#player2');
let input = document.querySelector('#inputInfo');
let winningScore = document.querySelector('#wScore');
let p1Btn = document.querySelector('#player1Btn');
let p2Btn = document.querySelector('#player2Btn');
let reset = document.querySelector('#resetBtn');
let setP1Score = 0;
let setP2Score = 0;
let wScore = 0;
let gameOver = false

input.addEventListener('change',()=>{
    winningScore.textContent = input.value ;
    wScore = Number(input.value);
    input.value = ''
})


p1Btn.addEventListener('click',()=>{
    if(!gameOver){
        setP1Score++;
    p1Score.textContent = setP1Score;

    if(setP1Score === wScore){
        gameOver = true;
        p1Btn.setAttribute('disabled','disabled');
        p2Btn.setAttribute('disabled','disabled');
    }
    }

})

p2Btn.addEventListener('click',()=>{
    if(!gameOver){
    setP2Score++;
    p2Score.textContent = setP2Score;

    if(setP2Score === wScore){
        gameOver = true;
        p1Btn.setAttribute('disabled','disabled');
        p2Btn.setAttribute('disabled','disabled');
    }
    }
})


reset.addEventListener('click',()=>{
    setP1Score = 0;
    setP2Score = 0;
    p1Score.textContent = 0;
    p2Score.textContent  = 0;
    winningScore.textContent = 0
    gameOver = false;
    p1Btn.removeAttribute('disabled','disabled');
    p2Btn.removeAttribute('disabled','disabled');
})
