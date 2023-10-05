const player1 = document.querySelector('#j1');
const player2 = document.querySelector('#j2');

const btnP1 = document.querySelector('.jogador-1');
const btnP2 = document.querySelector('.jogador-2');
const btnR = document.querySelector('.restart');
const select = document.querySelector('select');


let maxPoints = select.value;
let p1Placar = 0;
let p2Placar = 0;


player1.innerText = '0';
player2.innerText = '0';


function reset(){
    p1Placar = 0;
    p2Placar = 0;
    player1.innerText = `0`;
    player2.innerText = `0`;
    player2.style.color = '#e7d1bd';
    player1.style.color = '#e7d1bd';
}


btnP2.addEventListener('click', () => {
    if((p1Placar < maxPoints) &&  (p2Placar < maxPoints)) {
        p2Placar++;
        player2.innerText = `${p2Placar}`;
    }
    if (p2Placar == maxPoints){
        player2.style.color = '#11BF9F';
        player1.style.color = '#D90404';
    }
});

btnP1.addEventListener('click', () => {
    if((p1Placar < maxPoints) &&  (p2Placar < maxPoints)){
        p1Placar++;
        player1.innerText = `${p1Placar}`;
    }
    if (p1Placar == maxPoints){
        player1.style.color = '#11BF9F';
        player2.style.color = '#D90404';
    }
});

btnR.addEventListener('click', reset);

select.addEventListener('change', (e) => {
    maxPoints = Number(e.target.value);
    reset();
})
