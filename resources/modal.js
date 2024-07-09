document.addEventListener("DOMContentLoaded", function() {

  function abrirModal() {
    var modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'block';
    } else {
      console.error('No se encontró el modal #myModal.');
    }
  }

  // Esperar a que se cargue el modal antes de configurar eventos
    var closeModal = document.querySelector('.close');
    if (closeModal) {
      closeModal.addEventListener('click', function() {
        var modal = document.getElementById('myModal');
        if (modal) {
          modal.style.display = 'none';
        } else {
          console.error('No se encontró el modal #myModal para cerrar.');
        }
      });
    } else {
      console.error('No se encontró ningún elemento con la clase "close" para cerrar el modal.');
    }

    window.addEventListener('click', function(event) {
      var modal = document.getElementById('myModal');
      if (modal && event.target === modal) {
        modal.style.display = 'none';
      }
    });

  const signInUpButton = document.getElementById('sign-in-up');
  if (signInUpButton) {
    signInUpButton.addEventListener('click', function() {
      abrirModal();
    });
  } else {
    console.error('No se encontró el botón #sign-in-up.');
  }

//validaciones de campos
(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()



const containerUser = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

btnSignIn.addEventListener("click",()=>{
    containerUser.classList.remove("toggle");
})

btnSignUp.addEventListener("click",()=>{
    containerUser.classList.add("toggle");
})


// validacion de form de contacto

})