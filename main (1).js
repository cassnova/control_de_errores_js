// Control de Errores
// Los errores en programación se refieren a situaciones que no permiten que un programa funcione normalmente. Pueden ocurrir cuando un programa no sabe cómo manejar el trabajo que tiene en cuestión, como cuando intenta abrir un archivo inexistente o llegar a un punto final de la API basada en la web mientras no hay conectividad de red.

/* var b = 5;

if (b === 5) console.log(b);



const saludo = hola;

var a = 5;

if (a === 5) console.log(a); */

// propiedades de un error
// mensaje -> cadena de texto que lleva el error
// nombre -> que es el tipo de error el cual se a producido
// pila -> el rastro de codigo que se ejecuto cuando se produjo el error

//tipos de errores

// RangeError - Un RangeError se lanza cuando se establece una variable con un valor fuera de su rango de valores legales. Suele ocurrir cuando se pasa un valor como argumento a una función, y el valor dado no se encuentra en el rango de los parámetros de la función. A veces puede ser difícil de solucionar cuando se utilizan bibliotecas de terceros mal documentadas, ya que necesitas conocer el rango de valores posibles de los argumentos para pasar el valor correcto.

/* var arr = new Array(1);
const rec = (arr) => {
  arr[0] = new Array(1);
  rec(arr[0]);
};
rec(arr); */

//ReferenceError - Un ReferenceError se produce cuando algo está mal con la referencia de una variable en tu código. Puede que hayas olvidado definir un valor para la variable antes de usarla, o puede que estés intentando utilizar una variable inaccesible en tu código. En cualquier caso, revisar el seguimiento de la pila proporciona amplia información para encontrar y arreglar la referencia de la variable que está en mal estado.

// Error de Syntaxis - Estos errores son uno de los más sencillos de solucionar, ya que indican un error en la sintaxis del código. Dado que JavaScript es un lenguaje de scripting que se interpreta y no se compila, se lanzan cuando la aplicación ejecuta el script que contiene el error. En el caso de los lenguajes compilados, estos errores se identifican durante la compilación. Por lo tanto, los binarios de la aplicación no se crean hasta que se corrigen.

// TypeError - TypeError es uno de los errores más comunes en las aplicaciones de JavaScript. Este error se produce cuando algún valor no resulta ser de un determinado tipo esperado.

// Personalizar los Errores
// throw - El operador throw genera un error

// try catch - es un manejador de errores, en donde dentro de la palabra reservada try entra todo el codigo limpio, y de producirse un error entra al catch.
/* try {
  console.log("Inicio de Ejecucion del try");
  const saludo = hola;
  console.log("Fin de Ejecucion del try");
} catch (err) {
  console.log("Estamos en en catch porque hubo un error");
} */

/* try {
  console.log("Inicio de Ejecucion del try");
  const saludo = hola;
  console.log("Fin de Ejecucion del try");
} catch (err) {
  console.log(err)
  alert(err.name)
  alert(err.message)
  alert(err.stack)
} */

/* try {
  var valor = 'a';
  if (isNaN(valor)) {
    throw new Error("El valor ingresado no es un número");
  }
  console.log(Math.pow(valor, 2));
} catch (err) {
  console.log('Se produjo el siguiente error: ' + err)
} */

// ES6
// variables -> let y const
// let -> es la forma moderana de declarar las variables

/* let dos = 2;
if (true) {
  let uno = 1;
  var tres = 3;
  console.log(dos);
}

// console.log(uno)

var tres = 5;

dos = 6;

console.log(dos);
console.log(tres);

// const -> es una variable inmutable, no puede cambiar su valor

const dni = 1111111;
//  dni = 22222222

const arr = [];
arr.push(1,5,6,7)

console.log(arr) */

// Desestructuración -> La sintaxis de desestructuración es una funcionalidad fascinante que vino junto con ES6. Es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables. Es decir, podemos extraer datos de arreglos y objectos y asignarlos a variables.

/* const conj = ["hola", "mi", "nombre", "es", "Jhoswe"];
let a = conj[0]
let b = conj[1]
let c = conj[2]
let d = conj[3]
let e = conj[4]

let [a, b, c, d, e] = conj;

console.log(d);

const obj = {
  nombre: "Jhoswe",
  edad: 32,
  color: "azul",
};

let aa = obj.nombre;
let bb = obj.edad;
let cc = obj.color;

let {nombre,edad,color} = obj

console.log(nombre); */

/* let persona = {
  nombre: "Jhoswe",
  pais: "Perú",
  pasatiempos: ["codear", "jugar", "caminar", "dotear"],
};

let {nombre, pais, pasatiempos: hobbies} = persona

console.log(hobbies[3]) */

// Objetos literales
/* let nombre = "Fresa",
  categoria = "Frutas",
  precio = 8,
  producto = {
    nombre: nombre,
    categoria: categoria,
    precio: precio,
  }; */

let nombre = "Fresa",
  categoria = "Frutas",
  precio = 8,
  producto = {
    nombre,
    categoria,
    precio,
  };

/* const carrito = {
  agregarProductos: function (producto) {
    if (!this.productos) {
      this.producto = [producto];
    } else {
      this.productos.push(producto);
    }
  },
  obtenerPrecio: function () {
    return this.productos.reduce((total, pr) => total + pr.precio, 0);
  },
}; */

/* const carrito = {
  agregarProductos(producto) {
    if (!this.productos) {
      this.producto = [producto];
    } else {
      this.productos.push(producto);
    }
  },
  obtenerPrecio() {
    return this.productos.reduce((total, pr) => total + pr.precio, 0);
  },
};

console.log(producto);

// parametros rest -> Los parámetros rest son una forma de utilizar parámetros virtualmente infinitos. En funciones el último parámetro se puede prefijar con ..., lo que hará que todos los argumentos restantes (suministrados por el usuario) se coloquen dentro de un array de javascript "estándar".

function myFun(a, b, ...otros) {
  console.log("a", a);
  console.log("b", b);
  console.log("Otros", otros);
}
myFun(1, 2, 3, 4, 5, 6, 7, 8, 9, 65, 46, 546, 54, 6546, 13, 2165); */

// Spread Operator
/* 
const arr = [1, 2, 3, 50];
function suma(a, b, c, d) {
  return a + b + c + d;
}

console.log(suma(...arr));

const persona = ["Jhoswe", "es", "mi"];
const datos = ["¡Hola", ...persona, "nombre"];

console.log(datos); */

// Funciones Flecha

// f. con un parametro
/* var saludar = function (nombre) {
  return "hola mi nombre es " + nombre;
};

console.log(saludar('Jhoswe'))

let saludo = (nombre) => "hola mi nombre es " + nombre;

console.log(saludo('Jhoswe')) */

// f. con un varios parametros
var suma = function (a, b) {
  return a + b;
};

console.log(suma(5, 2));

let sumar = (a, b) => a + b;

console.log(sumar(5, 8));
