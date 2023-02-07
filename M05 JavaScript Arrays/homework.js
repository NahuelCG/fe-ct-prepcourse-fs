/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.pop();
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.push();
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:

return array.map((array) => { return array +1}); 

}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
array.push(elemento);
return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
array.unshift(elemento);
return array;

}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(" ");   
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:
   return array.includes(elemento);

}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var resultado=0;
   for (var i=0; i < arrayOfNums.length;i++){
   resultado=resultado + arrayOfNums[i];
   }
   return resultado;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var resultadoTotal=0;
   for (var i=0; i < resultadosTest.length;i++) {
      resultadoTotal=resultadoTotal + resultadosTest[i];  
   }
   resultadoTotal = resultadoTotal / resultadosTest.length;
    return resultadoTotal;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
// [0, 5, 8, 2, 1, 100]
// 0,  1, 2, 3, 4, 5.
   var numeroMasAlto=0;
   for (var i=0; i < arrayOfNums.length; i++) {
      if (numeroMasAlto < arrayOfNums[i]) {
         numeroMasAlto=arrayOfNums[i];
      }
   }
   return numeroMasAlto;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:

var multiplicador=1;
if (arguments.length === 0) {
   return 0;
} 
else if (arguments.length === 1) {
   return arguments[0];
}
else { 
   for (var i = 0; i < arguments.length;i++) {
      multiplicador= multiplicador * arguments[i]
   }
}
  return multiplicador;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:

   var acumulador=0
   for ( var i= 0; i < array.length;i++) {
         if (array[i] > 18 ) {
            acumulador = acumulador+1;
         }
   }
   return acumulador;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

   // domingo lunes martes miercoles jueves viernes sabado
   //    1     2     3        4        5       6      7

   if (numeroDeDia === 1 || numeroDeDia === 7) {
      return "Es fin de semana";
   } 
   else if( numeroDeDia > 1 && numeroDeDia < 7) {
      return "Es dia laboral";
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:

   var  numero= num.toString();
   var a= numero.split('');
   
   if (a[0]==9) {
      return true;
   }   
   else return false;   
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:

for (var i=0; i < array.length -1; i++) {
   if (array[i] === array[i+1]) {
      return true;
   } 
} 
return false;

   
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   // meses [ENERO, MARZO, NOVIEMBRE]
   // ubi   [ 0   ,   1    ,    2   ]

    var meses =[]

    for (var i=0; i < array.length; i++) {
     if (array[i]=== "Enero" || array[i] ==="Marzo" || array[i] === "Noviembre")
      meses.push(array[i]);
    }
    if (meses.length !== 3) {
      return "No se encontraron los meses pedidos";
   }
   else return meses;
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

   // TABLA DE MULTIPLICAR [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]
   // UBI                  [0, 1,  2,  3,  4,  5,  6,  7,  8,  9, 10]

   var tablaSeis= [0, 1,  2,  3,  4,  5,  6,  7,  8,  9, 10];

   for (var i=0; i < 11; i++) {
      tablaSeis[i]=tablaSeis[i] * 6;
   }
   return tablaSeis
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   //ARREGLO [1, 5, 8, 150, 132, 123]
   // UBI    [0, 1, 2,   3,   4,   5]
    
  var resultadoMayores=[];
  for (var i=0; i < array.length; i++) {
   if (array[i] > 100) {
      resultadoMayores.push(array[i]);
   }
  }
  return resultadoMayores;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
