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

const contenedor2 = document.getElementById("contenedor2");
const contenedor = document.getElementById("contenedor");
window.addEventListener("load", function () {
  contenedor.style.visibility = "visible";
  contenedor2.style.visibility = "hidden";

});

const btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", llamar);
function llamar() {
  contenedor.style.visibility = "hidden";
  contenedor2.style.visibility = "visible";
  document.getElementById("contenedor2").style.dislay = "block";
  const numero = document.getElementById("numTarjeta");
  let creditCardNumber = numero.value;
  let result = validator.isValid(creditCardNumber);
  let respuesta = validator.maskify(creditCardNumber);


  if (result == true) {
    document.getElementById("verRespuestas").innerHTML = `Su Tarjeta N° ${respuesta} <br> Es válida `;
  }

  else {
    document.getElementById("verRespuestas").innerHTML = `Su Tarjeta N° ${respuesta}<br> NO es válida `;

  }

}

//EVENTO BOTON VALIDAR OTRA TARJETA
let btnVolver = document.getElementById('btnVolver');
btnVolver.addEventListener('click', _ => {
  location.reload();
})
