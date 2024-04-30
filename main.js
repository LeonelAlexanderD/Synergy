


const app= document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay:60
});

typewriter
.typeString('Veni a conocer el Poncho!')
.pauseFor(400)
.start();

