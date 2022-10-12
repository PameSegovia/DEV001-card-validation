import validator from './validator.js';

//SELECCIONAR MES
for (let i = 1; i <= 12; i++) {
  let option = document.createElement('option');
  option.value = i;
  option.innerText = i;
  document.getElementById("selectMes").appendChild(option);
}

//SELECCIONAR AÑO
const year = new Date().getFullYear();
for (let i = year; i <= year + 8; i++) {
  let option = document.createElement('option');
  option.value = i;
  option.innerText = i;
  document.getElementById("selectYear").appendChild(option);
}

//Evento botón validar tarjeta
const btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", llamar);

function llamar() {
  const numero = document.getElementById("numTarjeta");
  let creditCardNumber = numero.value;
  let result = validator.isValid(creditCardNumber);
  let respuesta = validator.maskify(creditCardNumber)
  if (result == true) {
    alert("Su Tarjeta N° " + (respuesta) + " es válida");
  }
  else {
    alert("Tarjeta Inválida");
  }
}
