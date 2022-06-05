const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = function() {
    mario.classList.add('jump');

    setTimeout(function() {
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(function() {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +getComputedStyle(mario).bottom.replace('px', '');

    console.log(pipePosition)
    console.log(marioPosition)

    if (pipePosition <= 120) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

    }


}, 10)

document.addEventListener('keydown', jump);


// parei o video em 23min