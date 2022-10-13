const validator = {
  isValid(creditCardNumber) {
    const arr = creditCardNumber.split('').reverse();
    const arra2 = [];

    //----------------------------------------//
    for (let i = 0; i < arr.length; i++) {
      //recorrer el arrreglo y guardarlo en en arra2 , lo que queremos
      if (i %  2=== 1 ) {
        let doblado = parseInt(arr[i]) * 2;
        //si lo doblado es mayor que 9 ,sumamos sus digitos
        if (doblado > 9) {
          // sumas sus digitos del doblado.
          const sumaDigitos = doblado - 9;
         
          //guardar sumadigitos en el arra2
          arra2.push(sumaDigitos);
        }
        else {
          // si el doblado fuera <9
          arra2.push(doblado);
        }
      }
      //guardando los numeros de posicion No par en el arra2
      else {
        arra2.push(parseInt(arr[i]));
      }
    }
    //sumar elementos de arra2
   
    let sumaTotal = 0;
    arra2.forEach(function (elementos) {
      sumaTotal += elementos;
    });
    //Condicional para resultado 
    let resultado;
    if (sumaTotal % 10 == 0) {
      resultado = true;
    }
    else {
      resultado = false;
    }

    return resultado;

  },

  maskify(creditCardNumber) {
    if (creditCardNumber.length <= 4) {
      return creditCardNumber;
    }

    else {
      const string1 = creditCardNumber.split("")
      const ultimosCuatro = string1.slice(-4).join("");
      const primerosNum = string1.slice(0, -4).join("");
      let numerOculto = primerosNum.replace(/./g, "#" + "") + ultimosCuatro;
      return numerOculto;
    }






  }

}
export default validator;