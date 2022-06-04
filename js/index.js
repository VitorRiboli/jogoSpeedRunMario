const mario = document.querySelector('.mario');

const jump = function() {
    mario.classList.add('jump');

    setTimeout(function() {
        mario.classList.remove('jump');
    }, 500)
}

document.addEventListener('keydown', jump);