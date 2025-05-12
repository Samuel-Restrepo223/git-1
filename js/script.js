'use strict';

 document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('#formulario-contacto form');
    
    formulario.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Obtener valores
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const mensaje = document.getElementById('mensaje').value;
  
      // Mostrar en consola
      console.log("Nombre:", nombre);
      console.log("Email:", email);
      console.log("Mensaje:", mensaje);
  
      // Mostrar en pantalla
      const resultado = document.getElementById('resultado');
      resultado.innerHTML = `
        <div class="alert alert-success">
          <h5>Información enviada:</h5>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong> ${mensaje}</p>
        </div>
      `;
    });
  });