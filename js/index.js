const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = function() {
    mario.classList.add('jump');

    setTimeout(function() {
        mario.classList.remove('jump');
    }, 700);
}

const loop = setInterval(function() {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +getComputedStyle(mario).bottom.replace('px', '');

    console.log(pipePosition)
    console.log(marioPosition)

//Se a posição do pipe for <= 120px e menor que 0 e a posição do mario for menor que 80px
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none'; //para a animação do pipe
        pipe.style.left = `${pipePosition}px` //para onde na posição que ele se encontra

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = "./images/game-over.png" //a imagem de game-over aparece
        mario.style.width = '80px' // styles para a img game-over
        mario.style.marginLeft = '50px'

        clearInterval(loop); // limpar o loop quando perde o game
    }


}, 10);

document.addEventListener('keydown', jump);

//Tela de Game-over

//Placar 

//Reiniciar

