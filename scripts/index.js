let canvas = document.getElementById('matrixCanvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let matrixChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

let characters = [];

function initializeCharacters() {
    for (let i = 0; i < 200; i++) {
        characters.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: Math.random() * 5 + 1,
            char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
            fontSize: Math.floor(Math.random() * 25) + 10,
        });
    }
}

function drawCharacter(character) {
    ctx.font = character.fontSize + 'px monospace';
    ctx.fillStyle = '#93291E';
    ctx.fillText(character.char, character.x, character.y);
}

function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    characters.forEach(function(character) {
        character.y += character.speed;

        if (character.y > canvas.height) {
            character.y = 0;
            character.x = Math.random() * canvas.width;
            character.speed = Math.random() * 5 + 1;
        }

        drawCharacter(character);
    });
}

initializeCharacters();
setInterval(updateCanvas, 1000 / 30);
