function calcularTiempo() {

// se agrega un objeto  para obtenner la fecha y  hora del equipo 
    let tiempo = new Date();
// se aregan variables para que la funcion get tome el tiempo del equipo
    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();
    let miliSegundos = tiempo.getMilliseconds();

// se corrige las variables para que cuando el numero sea menor a 10 se agrege un cero (0)
    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;

// Combina las variables de hora, minuto, segundo y milisegundos en un formato de reloj
    let pantallaReloj = hora +":" + minuto + ":" + segundo + ":" + miliSegundos;
    let relojDigital = document.querySelector(".reloj");
    // Muestra el valor de pantallaReloj dentro del elemento reloj
    relojDigital.innerHTML = pantallaReloj;
    
}
// Ejecuta la función calcularTiempo cada 1000 milisegundos (1 segundo)
setInterval(calcularTiempo, 1000);