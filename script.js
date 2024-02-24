 
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona  por su ID
    
    var boton = document.getElementById('pedido');

    // Agrega un event listener para el evento de clic
    boton.addEventListener('click', function() {
        // Muestra un mensaje de alerta cuando se hace clic en el botón
        alert('te enviamos al chat de wsp para que puedas hacer tu pedido');
    });
});


