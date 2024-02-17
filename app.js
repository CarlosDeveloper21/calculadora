const displayValorAnterior = document.querySelector('.valor-superior');
const displayValorActual = document.querySelector('.valor-inferior');
const botonesNumero = document.querySelectorAll('.numero');
const botonesOperacion = document.querySelectorAll('.operador');

 const display = new Display(displayValorAnterior, displayValorActual);

botonesNumero.forEach(boton => {
    boton.addEventListener ('click', () =>
display.agregarNumero(boton.innerHTML));});

botonesOperacion.forEach(boton=>{
    boton.addEventListener('click',()=>display.computar(boton.value));
});