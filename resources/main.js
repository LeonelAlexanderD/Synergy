document.addEventListener('DOMContentLoaded', function() {

    function cargarModal() {
        fetch('resources/modal.html')
          .then(response => {
            if (!response.ok) {
              throw new Error('Error al cargar modal.html');
            }
            return response.text();
          })
          .then(html => {
            const modalPlaceholder = document.getElementById('modal-placeholder');
            modalPlaceholder.innerHTML = html;
      
            // Crear el enlace al archivo CSS
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'resources/modal.css';
      
            link.onload = function() {
              // Solo inicializar el modal después de que el CSS se haya cargado
              inicializarModal();
            };
      
            // Manejar errores de carga del CSS
            link.onerror = function() {
              console.error('Error al cargar modal.css');
            };
      
            document.head.appendChild(link);
          })
          .catch(error => {
            console.error('Error al cargar modal.html:', error);
          });
      }
      
      function inicializarModal() {
        function abrirModal() {
          var modal = document.getElementById('myModal');
          if (modal) {
            modal.style.display = 'block';
          } else {
            console.error('No se encontró el modal #myModal.');
          }
        }
      
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
      }
      
      cargarModal();

/* Frase ... */
const app= document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay:60
});

typewriter
.typeString('Veni a conocer el Poncho!')
.pauseFor(400)
.start();



// boton   subir al inicio backtop

let mybutton = document.getElementById("backtop");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}

const topBtn = document.getElementById("backtop");

topBtn.addEventListener('click', function() {
    topFunction();
});


// validacion de form de contacto
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


//api WeatherApi
const fetchWeatherData = () => {
  const url = `https://api.weatherapi.com/v1/current.json?key=ee411c5bd3494519a75200638240406&q=Catamarca&aqi=no&lang=es`;


  fetch(url)
    .then(response => response.json())
    .then(data => {
      const currentTemp = data.current.temp_c;
      const weatherDescription = data.current.condition.text;

      const temperatureElement = document.getElementById('temperatura');
      temperatureElement.innerHTML = `
        <h2>Temperatura actual: ${currentTemp} °C </h2>
        <p class= "text-primary fs-5" >Descripción: ${weatherDescription}</p>
      `;
    })
    .catch(error => {
      console.error('Error al obtener datos del clima:', error);
    });
};
fetchWeatherData();




})