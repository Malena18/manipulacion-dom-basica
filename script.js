const input1 = document.querySelector('#valor1');
const input2 = document.querySelector('#valor2');
const form= document.querySelector('#form');
const btn = document.querySelector('#btnCalcular');
const resultado= document.querySelector('#result');

form.addEventListener('submit',sumarInputValues);//permite escuchar el evento para aplicarlo al elemento en este caso al formulario

function sumarInputValues(event) {
    event.preventDefault(); //permite quitar lo que por defecto hace el formuluario de hacer submit al ultimo boton del formulario
    const sumaResult = Number(input1.value) + Number(input2.value);
    resultado.innerText= "la suma es " + sumaResult;
}

input2.addEventListener('focus', (event)=> {event.target.style.background='pink';});
input2.addEventListener('blur', (event)=> {event.target.style.background='';});