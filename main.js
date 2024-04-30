


const app= document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay:60
});

typewriter
.typeString('La ciudad de la furia')
.pauseFor(200)
.start();

