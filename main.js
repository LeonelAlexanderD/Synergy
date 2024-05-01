
/* Frase aparece y desaparece */

const app= document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay:60
});

typewriter
.typeString('Veni a conocer el Poncho!')
.pauseFor(400)
.start();

/** boton back to top */
let mybutton = document.getElementById("backtop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ( document.documentElement.scrollTop > 20) { /** document.body.scrollTop > 20 || */
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  // document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}