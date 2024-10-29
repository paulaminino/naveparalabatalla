// ¿Qué debe hacer el código?
// 1. Agregar un event listener al botón "Confirmar Preparación".
// 2. Calcular el costo total al hacer clic en el botón.
// 3. Actualizar el elemento "costo-total" con el valor calculado.
// 4. Mostrar créditos restantes.
// 5. Actualizar el badge "badge-cantidad" con el total de elementos seleccionados.
// 6. Verificar si el costo total excede los créditos disponibles.
// 7. Mostrar "¡Presupuesto excedido!" si se supera el límite.
// 8. Mostrar un mensaje de confirmación si está dentro del presupuesto.

//¿¿Qué elementos del DOM utilizaremos?

const limitePresupuesto = 5000; //¿Cuál es el limite del presupuesto según la actividad?
const elementos = document.querySelectorAll('#elementos input');
const badgeCantidad = document.getElementById('badge-cantidad');
const costoTotal = document.getElementById('costo-total');
const creditosRestantes = document.getElementById('creditos-restantes');
const mensajeLimite = document.getElementById('mensaje-limite');


elementos.forEach(elemento => {
    elemento.addEventListener('change', actualizarCostoTotal); //¿Cuál es el evento que debe activar la actualización del costo total?
});

let cantidadTotal = 0; 
let costoTotal = 0; 

//Desarrollar la función para actualizar los valores. 
 // Iterar sobre los elementos seleccionados para calcular el costo total
// ¿Qué elementos modifican su valor? ¿Sobre qué elementos debemos iterar?
function actualizarCostoTotal() { 
    



    // Actualizar el badge con la cantidad total de elementos
    document.getElementById('badge-cantidad').textContent = ___________; //¿De donde obtiene los datos el badget?

    // Mostrar advertencia si se supera el presupuesto. ¿Qué dos valores se comparan?
    if (costoTotal > limitePresupuesto) {
        mensajeLimite.__________._________ = '_______'; //¿Como mostramos el mensaje?
    } else {
        mensajeLimite.__________.display = 'none';//¿Como ocultamos el mensaje?
    }
}

// Agregar un evento al botón de confirmar
document.getElementById('confirmar-preparacion').addEventListener('click', () => {
    const 
    //El botón debe mostrar dos mensajes de alerte: 
    //Si se excede el valor de créditos. ¿Qué valores se deben comparar?
    //Si todo esta bien, un mensaje de confirmación
    
});