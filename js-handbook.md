# Apuntes Javascript 🤘

nota: 🦖 \ hack: 🤖 \ bookmark: 🚩 \ code: 🧑‍💻 \ key: 👑

# Intro

## Operadores
- Igualdad "=="
- Mismo valor y tipo "==="
- Diferente valor o tipo: !==

## Template strings
🚩 En windows usar: alt+96

🧑‍💻 `const nombre="Chris"; console.log(`Hola ${nombre}`);`

## Coerción - casteo

**conversión automática** ( implícita )

🧑‍💻 `const number = 10; const string = number; `

**casteo** ( explícita )

🧑‍💻

```
 const number = 10;
 const string = "10";
 const castedNumber = Number(string);
```

## Truthy & falsy

🦖 Valores verdaderos y falsos: 0, "", NaN, undefined o null. Todo valor que no sea falsy es truthy.

## Debugging

Usar para **detener la ejecución** del código.

🧑‍💻

```
 let numero = 5;
 debugger;
```

## typeof

Se utiliza para **retornar el tipo de datos** de un valor.

🧑‍💻

```
 const value = 25;

 if (typeof value === "number") {
   // Realizar la operación
 } else {
   // Lanzar un error
 }
```

## Scope ( Ambito de aplicacion )

Determina el alcance o **accesibilidad que tiene cada variable**.

1. Function scope
2. Global scope
3. Block scope

### Notas

**Block scope:**

- 🦖 Las variables pueden ser accedidas desde el bloque.
- 🦖 El codigo que está dentro de {}.

## Hoisting ( Elevación )

Se da cuando las declaraciones de variables y funciones son **desplazadas a la parte superior del scope más cercano**.

🧑‍💻

```
 console.log(name); // undefined
 var name = "Bard";

 console.log(greet()); // "Hola, Bard!"
 function greet() {
  return "Hola, Bard!";
 }
```

- 🦖 name y greet() se usan antes de ser declaradas. **Esto produce un error?** _No_, se "hoistea" la declaración.

### Notas

- Solo funciona con las declaraciones de variables y funciones.
- 🤖 Tratar de declarar variables arriba.

## 👑 this 
🤖 Se refiere al _objeto actual_ en el que se está ejecutando el código.
  
**Se refiere a**  
- En funciones: al objeto en el que se define la función.
- En objetos: al objeto en sí.
- En constructores: al nuevo objeto que se está creando.

---

# 👑 Funciones

## Funcion Declarativa

🦖 Funcion "normal"

- 🧑‍💻

```
  function sumar() {
     return 5 + 3;
 }
  sumar(5,3);
 // 🤖 con parametros opcionales o default
 function resta( a, b=3 ) {
     return a - b;
 }
 resta(5);
```

## Funcion de Expresión ( anonima )

🦖 Se definen "como una expresión!" Se puede asignar a una variable.

🤖 Usar para:
1.  Tareas cortas
2.  Para funciones que solo se necesitan en un lugar
3.  Como parámetros de otras funciones.
4.  Como valores de retorno de otras funciones.
5.  Como filtros o validadores.
6.  Para manejar eventos.

- 🧑‍💻

```
 // uso 1
 const imprimirMensaje = () => {
  console.log("Hola, mundo!");
 };
 imprimirMensaje();

 // uso 2
 let sumar= function (a,b){ return a + b }`
```

## IIFE (Immediately Invoked Function Expression)

🦖 Función que se autoejecuta inmediatamente después de ser definida

- Es anónima!
- No se puede reutilizar!

🧑‍💻
```
 (function () {
 console.log("Soy una funcion");
 })();
```

## Funcion Flecha - Arrow function

🦖 Funciones de una sola línea

🧑‍💻 (argumentos) => expresión que se evalúa y se devuelve

```
 const nombre = "Chris";
 const saludar = () => console.log("Hola " + nombre);
 saludar(); // Imprime 'Hola Chris'

```

## Métodos 
**Call()** Se usa para: llamar a una función con un valor específico para this. (objeto en diferente contexto) o llamar a una función con un número variable de argumentos. 

**Apply()** Se usa para: llamar a una función con un valor específico para this y con un array de argumentos o para llamar a una función con un array de argumentos que se genera dinámicamente. 

**Bind()** Se usa para: crear nuevas funciones con un valor específico para this o con una lista de argumentos predefinida.

## Closures
"Un closure en JavaScript es una función que tiene acceso al ámbito léxico en el que fue creada, incluso después de que la función que lo creó haya cerrado. Esto significa que una función interna puede acceder a las variables declaradas en la función externa, incluso si la función externa ya ha terminado de ejecutarse."
- Permite a las funciones recordar el estado de su entorno de ejecución.
- Se crea cuando una función es declarada dentro de otra función.
- Se usa para crear funciones genéricas y reutilizables.

**¿Que es Ámbito léxico?** Se refiere al alcance de una variable siguiendo la cadena de scopes.

Se usa para:
- Crear funciones privadas
- Crear funciones que tengan acceso a datos que se inicializan en el momento de la creación de la función
- Crear funciones que devuelvan otras funciones
- Crear funciones que modifiquen el comportamiento de otras funciones

### Higher-Order Functions

- 🤖 Es una función que toma una o más funciones como argumentos y/o devuelve una función como resultado.
- Permiten abstraer conceptos comunes en las operaciones de las funciones y permiten la reutilización de código.

## Más

- **Funciones declarativas se mueven al principio** del ámbito por lo que se pueden llamar antes de su definición.
- 🤖 **Funciones de expresión y flecha NO se elevan** por lo que solo se pueden llamar después de su definición.
- **Funciones declarativas tienen alcance de función**.
- **Funciones de expresión tienen alcance de variable**.
- Parámetro variables que se declaran en la definición de una función.
  - 🦖 **Rest** parámetro que puede tomar un número indefinido de argumentos. Ejemplo: (...numbers), considerarlo como un array. 
- Argumento valores que se pasan a una función cuando se invoca.
- Los argumentos se pasan por valor.
- 🚩 Los objetos se pasan por referencia.

---

# Estructuras de control

- **if** Seleccion _unica_
- **switch** Selección _multiple_
- 🚩 **Operador ternario**

  Evaluar una _condición y devolver un valor_ en función del resultado

  🧑‍💻 condicion ? valor_si_verdadero : valor_si_falso;
    `const result2 = number > 10 ? "Mayor que 10" : "Menor o igual que 10";`

---

# Iterar

- **for** _Conocemos la cantidad_ de repeticiones
- **for..in** para iterar sobre las _propiedades_ enumerables de un objeto 🦖
- **for..of** para iterar sobre los _elementos_ de una colección iterable 🦖
- **forEach()** función de callback que se utiliza para iterar sobre una colección de elementos y ejecutar una función para cada elemento de la colección.
- **While** _No conocemos la cantidad_ de repeticiones

---

# 👑 Objetos
## ¿Que es un objeto?
En Javascript "Un objeto es una **colección de propiedades**".
 
**¿Que son propiedades?** Las propiedades **definen las características** del objeto.
 
## 🦖 Notas:
- Clave: valor
- _Usar const_ para declarlos
- 🤖 En Javascript _TODO es un objeto_ excepto por los primitivos y las funciones

## Crear objetos
1. 🚩 object literal
2. new Object() 
3. Métodos Constructores
4. Object.create()
🧑‍💻 
 ```
  const auto = {marca: "BMW", modelo: "X6"}; //object literal
 ```

## Acceder a los objetos
1. 🚩 Notación de punto: `objectName.propertyName;`
2. Notación de corchetes: `objectName["propertyName"];`

## Iterar objetos

2. Bucle for..of
1. 🚩 Bucle for..in
3. Object.keys() retorna un _array con las claves_.
4. Object.values() retorna un _array con los valores_. (incluye valores heredados de los prototipos)
5. Object.entries() retorna un _array con las parejas clave-valor_ enumerables del objeto

## 🦖 Trabajando con objetos
**Object.assign()** para copiar de un objeto a otro objeto.

🧑‍💻
 ```
  const objeto1 = {a: 1, b: 2}; const objeto2 = {c: 3, d: 4};
  const nuevoObjeto = Object.assign({}, objeto1, objeto2);
  console.log(nuevoObjeto); // Output: {a: 1, b: 2, c: 3, d: 4}
 ```

**Object.values()** convertir un objeto a arreglo.

**JSON.stringify()** convertir un objeto a string.

**Object.freeze()** impedir que sea modificado.

**Object.defineProperty()** controlar el acceso a las propiedades y modificar su comportamiento.

**Object.getOwnProperties** retorna un array con todas las propiedades de un objeto.

**hasOwnProperty()** retorna un booleano indicando si un objeto tiene una propiedad.

**Métodos set() & get()** métodos especiales para:
- Validar los valores asignados a una propiedad
- Convertir los valores antes de asignarlos a una propiedad
- Guardar el estado de una propiedad en una variable privada

## Más
- Usar **objetos literales** es la forma _más sencilla_ y rápida.
- Usar **new Object()** para crear _objetos que se extenderán_ de otros objetos, o objetos vacios!
- 🤖 Usar **métodos Constructores** es la forma _más flexible_, permite crea una plantilla, se puede "personalizar" y asginar valores por defecto.
- Usar **Object.create()** para crear un nuevo objeto con un prototipo especificado, o crear objetos que heredan de otros objetos.
- 🤖 **Los valores primitivos son más rápidos!** 
- **Set** es una colección de valores únicos.
---

# Maps
Objeto que almacena pares de clave-valor. Son útiles para almacenar datos donde el orden de los pares clave-valor es importante.

## Ejemplo: almacenar datos de configuración

🧑‍💻 JSON

```
 {
   "apiKey": "1234567890",
   "baseUrl": "https://example.com"
 }
```

- Podemos usar un Map para almacenar la configuración de la app

🧑‍💻

```
 const config = new Map();

 config.set("apiKey", "1234567890");
 config.set("baseUrl", "https://example.com");

 const apiKey = config.get("apiKey");
 const baseUrl = config.get("baseUrl");
```

- Este código creará un Map con dos elementos:

1. La clave apiKey con el valor "1234567890".
2. La clave baseUrl con el valor "https://example.com".

---


# 👑 Array

- Es un tipo de objeto
- Declarar usando const
  🧑‍💻

```
 let myInts = new Array();
 myInts = [5,0,6];

 let myStrings = ["blue", "white", "red"];

 let store = [
  { product: "Bike", price: 1500 },
  { product: "TV", price: 1800 }
 ]
```

**indexOf()**
Encontrar la _posición de un valor_, sino retornara -1.
myInts.indexOf(6);

**forEach()**
Ejecutar una función para cada uno de los elementos.
**No retorna ningún valor.**
🧑‍💻

```
 myInts.forEach(( element ) =>  {
 console.log(element);
 });
```

## Métodos mutables ( modifican el array )

Cambian su estado actual

**push()** agregar

```
 myInts.push(7);
 console.log(myInts);// [ 5, 0, 6, 7 ]
```

**unshift()** agregar

```
 myInts.unshift(0);
 console.log(myInts);// [0, 5, 0, 6]
```

**pop()** eliminar

```
 myInts.pop();
 console.log(myInts);// [ 5,0 ]
```

**shift()** eliminar

```
 myInts.shift();
 console.log(myInts);// [ 0,6 ]
```

### Más

- **splice()** agrega o elimina elementos del array.
- **sort()** ordena los elementos del array.
- **reverse()** invierte el orden de los elementos del array.
- **fill()** rellena todos los elementos del array con un valor específico.
- **copyWithin()** copia una parte del array y la pega en otra parte del mismo array.

## Métodos inmutables ( Crean un nuevo array )

**filter()**
Nuevo array con todos los elementos que pasan una condición
🧑‍💻

```
 let workingFilter = articulos.filter(function (articulo) {
 return articulo.costo <= 500
 })
 console.log(workingFilter)
```

**map()**
Nuevo array a partir de un array existente, aplicando una función a cada elemento del array original.
🧑‍💻

```
 let workingMap = articulos.map(function (articulo) {
 return articulo.nombre
 })
 console.log(workingMap)
```

**find()**
Encontrar el primer elemento que cumpla con la condición. Sino retornará undefined.
🧑‍💻

```
 var workingFind = articulos.find(function (articulo) {
 return (articulo.nombre = "Laptop")
 })
 console.log(workingFind)
```

**some()**
Retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición.
🧑‍💻

```
 let workingSome = articulos.some(function (articulo) {
 return articulo.costo <= 700
 })
 console.log(workingSome)
```

### Más metodos

- **concat()** une dos o más arrays en uno nuevo.
- **slice()** devuelve una copia de una parte del array original.
- **every()** devuelve true si todos los elementos pasan la condición en una función.
- **findIndex()** devuelve el índice del primer elemento que pasa la condición especificada en una función.
- **reduce()** aplica una función acumuladora a cada elemento del array, y devuelve un único valor.
- **reduceRight()** aplica una función acumuladora a cada elemento del array en orden inverso, y devuelve un único valor.

## Array.from()

_Crear un nuevo array_ a partir de un _objeto iterable_.
🧑‍💻

```
 let myArray = Array.from('hello');
 console.log(myArray); // ["h", "e", "l", "l", "o"]
```

## Array(n).fill()

Llena todos los elementos de un array con un valor específico
🧑‍💻 `let myArray = new Array(5).fill(0); // [0, 0, 0, 0, 0]`

## Array.isArray()

Determinar si un objeto es un array o no.
🧑‍💻 `console.log(Array.isArray(myArray)); // true`

## Spread operator

Expandir un iterable en sus elementos individuales.
🧑‍💻

```
 const originalArray = [1, 2, 3, 4];
 const copiedArray = [...originalArray];
```

## Arrays Bidimensionales ( arrays de arrays )

🧑‍💻

```
 const matrix = [];
 matrix[0] = [1, 2, 3];
 matrix[1] = [4, 5, 6];
 matrix[2] = [7, 8, 9];
 console.log(matrix);
```

## Array.protoype.includes()

Función para determinar si un elemento existe en un array.
Sin tener que recorrer todo el array.

🧑‍💻

```
 const numbers = [1, 2, 3, 4, 5];
 const result = numbers.includes(3);
 console.log(result); // true
```

/_El método también puede buscar objetos y otros tipos de datos. Sin embargo, se realiza utilizando la comparación de igualdad estricta "==="
Sólo se considerarán iguales dos objetos si se refieren a la misma ubicación en memoria._/

## Array.protoype.join()

Convertir todos los elementos de un array en un solo string.
🧑‍💻

```
 const fruits = ["apple", "banana", "cherry"];
 const fruitsString = fruits.join(", ");
 console.log(fruitsString); // "apple, banana, cherry"
```

## Array.prototype.flat()

Combinar varios arreglos en un solo arreglo (sin niveles adicionales de anidamiento).
Puede aceptar un argumento opcional, que indica la profundidad de anidamiento máxima hasta la cual se deben aplanar los arreglos.
🧑‍💻

```
 const multiDimensionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
 const flatArray = multiDimensionalArray.flat();
 //const flatArray = multiDimensionalArray.flat(1); en este caso indica el valor opcional
 console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Array.prototype.flatMap()

Combina Array.prototype.map() y Array.prototype.flat().
Para transformar cada elemento del arreglo, luego aplana el resultado hasta obtener un único arreglo con los elementos resultantes.

🧑‍💻

```
 const numbers = [1, 2, 3, 4];

 const result = numbers.flatMap(x => [x, x * 2]);

 console.log(result); // Output: [1, 2, 2, 4, 3, 6, 4, 8]
```

Puede ser útil para eliminar elementos null o undefined de un arreglo 🤖
🧑‍💻

```
 const values = [1, 2, 3, null, 4, undefined, 5];

 const result = values.flatMap(x => x);

 console.log(result);
 // Output: [1, 2, 3, 4, 5]
```

---


# Seleccionar elementos HTML

- Obtener datos desde el HTML:
- 🧑‍💻 `const input1 = document.querySelector("#id");`

# Modificar elementos HTML

- Modificar el DOM
- 🧑‍💻 `h1.innerHTML = 'Practicando JS';`

- Modificar atributos
- 🧑‍💻 `h1.setAttribute('class', 'mySecondClass')`

- Agregar una clase
- 🧑‍💻 `h1.classList.add(mySecondClass);`

---

# Eventos

- Son el resultado de que algo que ocurre en el HTML
- Se usan para interactuar con el usuario, responder a cambios o validar acciones
  addEventListener( nombre_del_evento, funcion )

🧑‍💻

```
 const boton = document.querySelector("button");

 boton.addEventListener("click", () => {
   console.log("El botón fue clicado!");
 });
```

**usar on** si el evento está "conectado" a un elemento. 🤖

**Event Handlers**

- "Manejadores de Eventos" son funciones que se ejecutan cuando ocurre un evento.
- Se utilizan para responder al usuario y para el comportamiento de la página.

---



# 🤘 Asincronismo

- 🤖 Las operaciones no bloquean el hilo de ejecución principal.
- 🦖 Varias operaciones pueden ocurrir al mismo tiempo.

## Promesas

Permiten que una función asíncrona devuelva un valor que **estará disponible en el futuro**,

- de manera exitosa (resolve)
- con un error (reject).

**simple**
🧑‍💻

```
 const promise = new Promise((resolve, reject) => {
 setTimeout(() => {
 resolve(42);
 }, 2000);
 });
```

**then**
🧑‍💻

```
 const promise = new Promise((resolve, reject) => {
 setTimeout(() => {
 resolve({ number: 42, text: "hello" });
 }, 2000);
 });
 promise
 .then((result) => {
 const doubledNumber = result.number \* 2;
 return doubledNumber.toString();
 })
 .then((result) => {
 console.log(`The result is ${result}`);
 })
 .catch((error) => {
 console.error(error);
 });
```

**setInterval y setTimeout**

- Los temporizadores para programar tareas para que se ejecuten en el futuro.
- son funciones asincrónicas!

### setTimeout

- Permite programar una tarea para que se ejecute después de un cierto período (milisegundos)
- 🧑‍💻

  ```
  setTimeout(() => {
  console.log('Han pasado 5 segundos');
  }, 5000);
  ```

- setTimeout() retorna un identificador único (un número) que puede ser utilizado para cancelar el temporizador antes de que se ejecute. Con la función clearTimeout() y pasarle el identificador como argumento.

- 🧑‍💻

  ```
  let id = setTimeout(() => {
  console.log('Han pasado 5 segundos');
  }, 5000);

  // Cancelar el temporizador
  clearTimeout(id);
  ```

### setInterval

- Para programar una tarea para que se repita en un intervalo de tiempo determinado.

- 🧑‍💻
  ```
  setInterval(() => {
  console.log('Han pasado 2 segundos');
  }, 2000);
  ```

## Callback

- Son funciones que se pasan como argumentos a otra función y se llaman en algún momento después de que se complete la operación asíncrona.
- 🧑‍💻

  ```
  function getUserData(userId, callback) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(error))
    }

    function displayUserData(data) {
    console.log(data.name);
    }

    getUserData(1, displayUserData);
  ```

### Antipatron Callback Hell

- 🧑‍💻

  ```
  operation1(function(result1) {
  operation2(result1, function(result2) {
      operation3(result2, function(result3) {
      operation4(result3, function(result4) {
          // ...continuar con más operaciones
      });
      });
  });
  });
  ```

- Solucion: utilizar Promesas o Async/Await, que proporcionan una forma más estructurada y fácil de leer para manejar código asíncrono.

- 🧑‍💻

  ```
  operation1()
  .then(result1 => {
      return operation2(result1);
  })
  .then(result2 => {
      return operation3(result2);
  })
  .then(result3 => {
      return operation4(result3);
  })
  .then(result4 => {
      // ...continuar con más operaciones
  })
  .catch(error => {
      // Manejar errores
  });
  ```

- En este ejemplo, cada operación devuelve una Promesa que se encadena usando el método then(). Esto hace que el código sea más legible y fácil de seguir en comparación con la versión anterior.

## Async/await

- En lugar de usar callbacks anidados, async/await permite que el código parezca más secuencial y fácil de leer.

- 🧑‍💻

  ```
  async function getUserData(userId) {
  try {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const data = await response.json();
  return data;
  } catch (error) {
  console.log(error);
  }
  }

  async function displayUserData(userId) {
  const data = await getUserData(userId);
  console.log(data.name);
  }

  displayUserData(1);
  ```

- En este ejemplo, se define una función getUserData que hace la misma llamada a la API que en el ejemplo anterior, pero esta vez usa await para esperar la respuesta y el try/catch para manejar los errores. La función displayUserData también utiliza await para esperar que se resuelva la promesa retornada por getUserData y luego muestra el nombre del usuario en la consola.

---

# Regular Expressions ( regex )

- Es una secuencia de caracteres para buscar y remplazar.
- **search()** Busca una cadena para un valor especificado y devuelve la posición de la coincidencia.
- **replace()** Reemplaza un valor con otro valor en una cadena.

---

# JSON ( JavaScript Object Notation )

- Formato para **almacenar y transportar datos** desde el server.
- "key":value
  🧑‍💻 `'{"name":"Chris", "age":30}'`
- **JSON.stringify()** Convierte un _objeto JS a un JSON_.
- **JSON.parse()** Convierte un _JSON a un JS object o array_

## Trabajar con "Dates"

🧑‍💻

```
 // usando callback para leer dates
 const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
 const obj = JSON.parse(text, function (key, value) {
   if (key == "birth") {
     return new Date(value);
   } else {
     return value;
   }
 });

 document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;
```

---

# Coding

- **CamelCase:**
  Usar:

1.  let, const, function: **miNombre**
2.  class: **MiClase**

- **Usar const** para arrays y objects
- **Misunderstanding Floats** usar "\* 10" y luego "/ 10"
- **Performance**
  1- Usar la menor cantidad posible de variables globales.
  2- ( Si no es necesario ) no crear variables.
  3- Almacenar valores en constantes para no recorrer el metodo varias veces
  🧑‍💻

```
let l = arr.length;
for (let i = 0; i < l; i++) {
```

---

# Display

- 🚩 **innerHTML** modificar elementos HTML existentes
- **document.write()** agregar nuevo contenido

---

# Pendiente 🤘 🐲

# Bases Javascript

# Tags
  🦖 nota
  🥷🏻 hack
  🚀 concepto
  🛠 ejemplo
  👑 buena practica
  🔑 importante

## Operadores
- Igualdad "=="
- Mismo valor y tipo "==="
- Diferente valor o tipo: !==

## Template strings
🚩 En windows usar: alt+96

🧑‍💻 `const nombre="Chris"; console.log(`Hola ${nombre}`);`

## Coerción - casteo

**conversión automática** ( implícita )

🧑‍💻 `const number = 10; const string = number; `

**casteo** ( explícita )

🧑‍💻

```
 const number = 10;
 const string = "10";
 const castedNumber = Number(string);
```

## Truthy & falsy

🦖 Valores verdaderos y falsos: 0, "", NaN, undefined o null. Todo valor que no sea falsy es truthy.

## Debugging

Usar para **detener la ejecución** del código.

🧑‍💻

```
 let numero = 5;
 debugger;
```

## typeof

Se utiliza para **retornar el tipo de datos** de un valor.

🧑‍💻

```
 const value = 25;

 if (typeof value === "number") {
   // Realizar la operación
 } else {
   // Lanzar un error
 }
```

## Scope ( Ambito de aplicacion )

Determina el alcance o **accesibilidad que tiene cada variable**.

1. Function scope
2. Global scope
3. Block scope

### Notas

**Block scope:**

- 🦖 Las variables pueden ser accedidas desde el bloque.
- 🦖 El codigo que está dentro de {}.

## Hoisting ( Elevación )

Se da cuando las declaraciones de variables y funciones son **desplazadas a la parte superior del scope más cercano**.

🧑‍💻

```
 console.log(name); // undefined
 var name = "Bard";

 console.log(greet()); // "Hola, Bard!"
 function greet() {
  return "Hola, Bard!";
 }
```

- 🦖 name y greet() se usan antes de ser declaradas. **Esto produce un error?** _No_, se "hoistea" la declaración.

### Notas

- Solo funciona con las declaraciones de variables y funciones.
- 🤖 Tratar de declarar variables arriba.

## 👑 this 
🤖 Se refiere al _objeto actual_ en el que se está ejecutando el código.
  
**Se refiere a**  
- En funciones: al objeto en el que se define la función.
- En objetos: al objeto en sí.
- En constructores: al nuevo objeto que se está creando.

---

# 👑 Funciones

## Funcion Declarativa

🦖 Funcion "normal"

- 🧑‍💻

```
  function sumar() {
     return 5 + 3;
 }
  sumar(5,3);
 // 🤖 con parametros opcionales o default
 function resta( a, b=3 ) {
     return a - b;
 }
 resta(5);
```

## Funcion de Expresión ( anonima )

🦖 Se definen "como una expresión!" Se puede asignar a una variable.

🤖 Usar para:
1.  Tareas cortas
2.  Para funciones que solo se necesitan en un lugar
3.  Como parámetros de otras funciones.
4.  Como valores de retorno de otras funciones.
5.  Como filtros o validadores.
6.  Para manejar eventos.

- 🧑‍💻

```
 // uso 1
 const imprimirMensaje = () => {
  console.log("Hola, mundo!");
 };
 imprimirMensaje();

 // uso 2
 let sumar= function (a,b){ return a + b }`
```

## IIFE (Immediately Invoked Function Expression)

🦖 Función que se autoejecuta inmediatamente después de ser definida

- Es anónima!
- No se puede reutilizar!

🧑‍💻
```
 (function () {
 console.log("Soy una funcion");
 })();
```

## Funcion Flecha - Arrow function

🦖 Funciones de una sola línea

🧑‍💻 (argumentos) => expresión que se evalúa y se devuelve

```
 const nombre = "Chris";
 const saludar = () => console.log("Hola " + nombre);
 saludar(); // Imprime 'Hola Chris'

```

## Métodos 
**Call()** Se usa para: llamar a una función con un valor específico para this. (objeto en diferente contexto) o llamar a una función con un número variable de argumentos. 

**Apply()** Se usa para: llamar a una función con un valor específico para this y con un array de argumentos o para llamar a una función con un array de argumentos que se genera dinámicamente. 

**Bind()** Se usa para: crear nuevas funciones con un valor específico para this o con una lista de argumentos predefinida.

## Closures
"Un closure en JavaScript es una función que tiene acceso al ámbito léxico en el que fue creada, incluso después de que la función que lo creó haya cerrado. Esto significa que una función interna puede acceder a las variables declaradas en la función externa, incluso si la función externa ya ha terminado de ejecutarse."
- Permite a las funciones recordar el estado de su entorno de ejecución.
- Se crea cuando una función es declarada dentro de otra función.
- Se usa para crear funciones genéricas y reutilizables.

**¿Que es Ámbito léxico?** Se refiere al alcance de una variable siguiendo la cadena de scopes.

Se usa para:
- Crear funciones privadas
- Crear funciones que tengan acceso a datos que se inicializan en el momento de la creación de la función
- Crear funciones que devuelvan otras funciones
- Crear funciones que modifiquen el comportamiento de otras funciones

### Higher-Order Functions

- 🤖 Es una función que toma una o más funciones como argumentos y/o devuelve una función como resultado.
- Permiten abstraer conceptos comunes en las operaciones de las funciones y permiten la reutilización de código.

## Más

- **Funciones declarativas se mueven al principio** del ámbito por lo que se pueden llamar antes de su definición.
- 🤖 **Funciones de expresión y flecha NO se elevan** por lo que solo se pueden llamar después de su definición.
- **Funciones declarativas tienen alcance de función**.
- **Funciones de expresión tienen alcance de variable**.
- Parámetro variables que se declaran en la definición de una función.
  - 🦖 **Rest** parámetro que puede tomar un número indefinido de argumentos. Ejemplo: (...numbers), considerarlo como un array. 
- Argumento valores que se pasan a una función cuando se invoca.
- Los argumentos se pasan por valor.
- 🚩 Los objetos se pasan por referencia.

---

# Estructuras de control

- **if** Seleccion _unica_
- **switch** Selección _multiple_
- 🚩 **Operador ternario**

  Evaluar una _condición y devolver un valor_ en función del resultado

  🧑‍💻 condicion ? valor_si_verdadero : valor_si_falso;
    `const result2 = number > 10 ? "Mayor que 10" : "Menor o igual que 10";`

---

# Ciclos

- **for** _Conocemos la cantidad_ de repeticiones
- **for..in** para iterar sobre las _propiedades_ enumerables de un objeto 🦖
- **for..of** para iterar sobre los _elementos_ de una colección iterable 🦖
- **forEach()** función de callback que se utiliza para iterar sobre una colección de elementos y ejecutar una función para cada elemento de la colección.
- **While** _No conocemos la cantidad_ de repeticiones

---

# 👑 Objetos
## ¿Que es un objeto?
En Javascript "Un objeto es una **colección de propiedades**".
 
**¿Que son propiedades?** Las propiedades **definen las características** del objeto.
 
## 🦖 Notas:
- Clave: valor
- _Usar const_ para declarlos
- 🤖 En Javascript _TODO es un objeto_ excepto por los primitivos y las funciones

## Crear objetos
1. 🚩 object literal
2. new Object() 
3. Métodos Constructores
4. Object.create()
🧑‍💻 
 ```
  const auto = {marca: "BMW", modelo: "X6"}; //object literal
 ```

## Acceder a los objetos
1. 🚩 Notación de punto: `objectName.propertyName;`
2. Notación de corchetes: `objectName["propertyName"];`

## Iterar objetos

2. Bucle for..of
1. 🚩 Bucle for..in
3. Object.keys() retorna un _array con las claves_.
4. Object.values() retorna un _array con los valores_. (incluye valores heredados de los prototipos)
5. Object.entries() retorna un _array con las parejas clave-valor_ enumerables del objeto

## 🦖 Trabajando con objetos
**Object.assign()** para copiar de un objeto a otro objeto.

🧑‍💻
 ```
  const objeto1 = {a: 1, b: 2}; const objeto2 = {c: 3, d: 4};
  const nuevoObjeto = Object.assign({}, objeto1, objeto2);
  console.log(nuevoObjeto); // Output: {a: 1, b: 2, c: 3, d: 4}
 ```

**Object.values()** convertir un objeto a arreglo.

**JSON.stringify()** convertir un objeto a string.

**Object.freeze()** impedir que sea modificado.

**Object.defineProperty()** controlar el acceso a las propiedades y modificar su comportamiento.

**Object.getOwnProperties** retorna un array con todas las propiedades de un objeto.

**hasOwnProperty()** retorna un booleano indicando si un objeto tiene una propiedad.

**Métodos set() & get()** métodos especiales para:
- Validar los valores asignados a una propiedad
- Convertir los valores antes de asignarlos a una propiedad
- Guardar el estado de una propiedad en una variable privada

## Más
- Usar **objetos literales** es la forma _más sencilla_ y rápida.
- Usar **new Object()** para crear _objetos que se extenderán_ de otros objetos, o objetos vacios!
- 🤖 Usar **métodos Constructores** es la forma _más flexible_, permite crea una plantilla, se puede "personalizar" y asginar valores por defecto.
- Usar **Object.create()** para crear un nuevo objeto con un prototipo especificado, o crear objetos que heredan de otros objetos.
- 🤖 **Los valores primitivos son más rápidos!** 
- **Set** es una colección de valores únicos.
---

# Maps
Objeto que almacena pares de clave-valor. Son útiles para almacenar datos donde el orden de los pares clave-valor es importante.

## Ejemplo: almacenar datos de configuración

🧑‍💻 JSON

```
 {
   "apiKey": "1234567890",
   "baseUrl": "https://example.com"
 }
```

- Podemos usar un Map para almacenar la configuración de la app

🧑‍💻

```
 const config = new Map();

 config.set("apiKey", "1234567890");
 config.set("baseUrl", "https://example.com");

 const apiKey = config.get("apiKey");
 const baseUrl = config.get("baseUrl");
```

- Este código creará un Map con dos elementos:

1. La clave apiKey con el valor "1234567890".
2. La clave baseUrl con el valor "https://example.com".

---


# 👑 Array

- Es un tipo de objeto
- Declarar usando const
  🧑‍💻

```
 let myInts = new Array();
 myInts = [5,0,6];

 let myStrings = ["blue", "white", "red"];

 let store = [
  { product: "Bike", price: 1500 },
  { product: "TV", price: 1800 }
 ]
```

**indexOf()**
Encontrar la _posición de un valor_, sino retornara -1.
myInts.indexOf(6);

**forEach()**
Ejecutar una función para cada uno de los elementos.
**No retorna ningún valor.**
🧑‍💻

```
 myInts.forEach(( element ) =>  {
 console.log(element);
 });
```

## Métodos mutables ( modifican el array )

Cambian su estado actual

**push()** agregar

```
 myInts.push(7);
 console.log(myInts);// [ 5, 0, 6, 7 ]
```

**unshift()** agregar

```
 myInts.unshift(0);
 console.log(myInts);// [0, 5, 0, 6]
```

**pop()** eliminar

```
 myInts.pop();
 console.log(myInts);// [ 5,0 ]
```

**shift()** eliminar

```
 myInts.shift();
 console.log(myInts);// [ 0,6 ]
```

### Más

- **splice()** agrega o elimina elementos del array.
- **sort()** ordena los elementos del array.
- **reverse()** invierte el orden de los elementos del array.
- **fill()** rellena todos los elementos del array con un valor específico.
- **copyWithin()** copia una parte del array y la pega en otra parte del mismo array.

## Métodos inmutables ( Crean un nuevo array )

**filter()**
Nuevo array con todos los elementos que pasan una condición
🧑‍💻

```
 let workingFilter = articulos.filter(function (articulo) {
 return articulo.costo <= 500
 })
 console.log(workingFilter)
```

**map()**
Nuevo array a partir de un array existente, aplicando una función a cada elemento del array original.
🧑‍💻

```
 let workingMap = articulos.map(function (articulo) {
 return articulo.nombre
 })
 console.log(workingMap)
```

**find()**
Encontrar el primer elemento que cumpla con la condición. Sino retornará undefined.
🧑‍💻

```
 var workingFind = articulos.find(function (articulo) {
 return (articulo.nombre = "Laptop")
 })
 console.log(workingFind)
```

**some()**
Retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición.
🧑‍💻

```
 let workingSome = articulos.some(function (articulo) {
 return articulo.costo <= 700
 })
 console.log(workingSome)
```

### Más metodos

- **concat()** une dos o más arrays en uno nuevo.
- **slice()** devuelve una copia de una parte del array original.
- **every()** devuelve true si todos los elementos pasan la condición en una función.
- **findIndex()** devuelve el índice del primer elemento que pasa la condición especificada en una función.
- **reduce()** aplica una función acumuladora a cada elemento del array, y devuelve un único valor.
- **reduceRight()** aplica una función acumuladora a cada elemento del array en orden inverso, y devuelve un único valor.

## Array.from()

_Crear un nuevo array_ a partir de un _objeto iterable_.
🧑‍💻

```
 let myArray = Array.from('hello');
 console.log(myArray); // ["h", "e", "l", "l", "o"]
```

## Array(n).fill()

Llena todos los elementos de un array con un valor específico
🧑‍💻 `let myArray = new Array(5).fill(0); // [0, 0, 0, 0, 0]`

## Array.isArray()

Determinar si un objeto es un array o no.
🧑‍💻 `console.log(Array.isArray(myArray)); // true`

## Spread operator

Expandir un iterable en sus elementos individuales.
🧑‍💻

```
 const originalArray = [1, 2, 3, 4];
 const copiedArray = [...originalArray];
```

## Arrays Bidimensionales ( arrays de arrays )

🧑‍💻

```
 const matrix = [];
 matrix[0] = [1, 2, 3];
 matrix[1] = [4, 5, 6];
 matrix[2] = [7, 8, 9];
 console.log(matrix);
```

## Array.protoype.includes()

Función para determinar si un elemento existe en un array.
Sin tener que recorrer todo el array.

🧑‍💻

```
 const numbers = [1, 2, 3, 4, 5];
 const result = numbers.includes(3);
 console.log(result); // true
```

/_El método también puede buscar objetos y otros tipos de datos. Sin embargo, se realiza utilizando la comparación de igualdad estricta "==="
Sólo se considerarán iguales dos objetos si se refieren a la misma ubicación en memoria._/

## Array.protoype.join()

Convertir todos los elementos de un array en un solo string.
🧑‍💻

```
 const fruits = ["apple", "banana", "cherry"];
 const fruitsString = fruits.join(", ");
 console.log(fruitsString); // "apple, banana, cherry"
```

## Array.prototype.flat()

Combinar varios arreglos en un solo arreglo (sin niveles adicionales de anidamiento).
Puede aceptar un argumento opcional, que indica la profundidad de anidamiento máxima hasta la cual se deben aplanar los arreglos.
🧑‍💻

```
 const multiDimensionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
 const flatArray = multiDimensionalArray.flat();
 //const flatArray = multiDimensionalArray.flat(1); en este caso indica el valor opcional
 console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Array.prototype.flatMap()

Combina Array.prototype.map() y Array.prototype.flat().
Para transformar cada elemento del arreglo, luego aplana el resultado hasta obtener un único arreglo con los elementos resultantes.

🧑‍💻

```
 const numbers = [1, 2, 3, 4];

 const result = numbers.flatMap(x => [x, x * 2]);

 console.log(result); // Output: [1, 2, 2, 4, 3, 6, 4, 8]
```

Puede ser útil para eliminar elementos null o undefined de un arreglo 🤖
🧑‍💻

```
 const values = [1, 2, 3, null, 4, undefined, 5];

 const result = values.flatMap(x => x);

 console.log(result);
 // Output: [1, 2, 3, 4, 5]
```

---


# Seleccionar elementos HTML

- Obtener datos desde el HTML:
- 🧑‍💻 `const input1 = document.querySelector("#id");`

# Modificar elementos HTML

- Modificar el DOM
- 🧑‍💻 `h1.innerHTML = 'Practicando JS';`

- Modificar atributos
- 🧑‍💻 `h1.setAttribute('class', 'mySecondClass')`

- Agregar una clase
- 🧑‍💻 `h1.classList.add(mySecondClass);`

---

# Eventos

- Son el resultado de que algo que ocurre en el HTML
- Se usan para interactuar con el usuario, responder a cambios o validar acciones
  addEventListener( nombre_del_evento, funcion )

🧑‍💻

```
 const boton = document.querySelector("button");

 boton.addEventListener("click", () => {
   console.log("El botón fue clicado!");
 });
```

**usar on** si el evento está "conectado" a un elemento. 🤖

**Event Handlers**

- "Manejadores de Eventos" son funciones que se ejecutan cuando ocurre un evento.
- Se utilizan para responder al usuario y para el comportamiento de la página.

---



# 🤘 Asincronismo

- 🤖 Las operaciones no bloquean el hilo de ejecución principal.
- 🦖 Varias operaciones pueden ocurrir al mismo tiempo.

## Promesas

Permiten que una función asíncrona devuelva un valor que **estará disponible en el futuro**,

- de manera exitosa (resolve)
- con un error (reject).

**simple**
🧑‍💻

```
 const promise = new Promise((resolve, reject) => {
 setTimeout(() => {
 resolve(42);
 }, 2000);
 });
```

**then**
🧑‍💻

```
 const promise = new Promise((resolve, reject) => {
 setTimeout(() => {
 resolve({ number: 42, text: "hello" });
 }, 2000);
 });
 promise
 .then((result) => {
 const doubledNumber = result.number \* 2;
 return doubledNumber.toString();
 })
 .then((result) => {
 console.log(`The result is ${result}`);
 })
 .catch((error) => {
 console.error(error);
 });
```

**setInterval y setTimeout**

- Los temporizadores para programar tareas para que se ejecuten en el futuro.
- son funciones asincrónicas!

### setTimeout

- Permite programar una tarea para que se ejecute después de un cierto período (milisegundos)
- 🧑‍💻

  ```
  setTimeout(() => {
  console.log('Han pasado 5 segundos');
  }, 5000);
  ```

- setTimeout() retorna un identificador único (un número) que puede ser utilizado para cancelar el temporizador antes de que se ejecute. Con la función clearTimeout() y pasarle el identificador como argumento.

- 🧑‍💻

  ```
  let id = setTimeout(() => {
  console.log('Han pasado 5 segundos');
  }, 5000);

  // Cancelar el temporizador
  clearTimeout(id);
  ```

### setInterval

- Para programar una tarea para que se repita en un intervalo de tiempo determinado.

- 🧑‍💻
  ```
  setInterval(() => {
  console.log('Han pasado 2 segundos');
  }, 2000);
  ```

## Callback

- Son funciones que se pasan como argumentos a otra función y se llaman en algún momento después de que se complete la operación asíncrona.
- 🧑‍💻

  ```
  function getUserData(userId, callback) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(error))
    }

    function displayUserData(data) {
    console.log(data.name);
    }

    getUserData(1, displayUserData);
  ```

### Antipatron Callback Hell

- 🧑‍💻

  ```
  operation1(function(result1) {
  operation2(result1, function(result2) {
      operation3(result2, function(result3) {
      operation4(result3, function(result4) {
          // ...continuar con más operaciones
      });
      });
  });
  });
  ```

- Solucion: utilizar Promesas o Async/Await, que proporcionan una forma más estructurada y fácil de leer para manejar código asíncrono.

- 🧑‍💻

  ```
  operation1()
  .then(result1 => {
      return operation2(result1);
  })
  .then(result2 => {
      return operation3(result2);
  })
  .then(result3 => {
      return operation4(result3);
  })
  .then(result4 => {
      // ...continuar con más operaciones
  })
  .catch(error => {
      // Manejar errores
  });
  ```

- En este ejemplo, cada operación devuelve una Promesa que se encadena usando el método then(). Esto hace que el código sea más legible y fácil de seguir en comparación con la versión anterior.

## Async/await

- En lugar de usar callbacks anidados, async/await permite que el código parezca más secuencial y fácil de leer.

- 🧑‍💻

  ```
  async function getUserData(userId) {
  try {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const data = await response.json();
  return data;
  } catch (error) {
  console.log(error);
  }
  }

  async function displayUserData(userId) {
  const data = await getUserData(userId);
  console.log(data.name);
  }

  displayUserData(1);
  ```

- En este ejemplo, se define una función getUserData que hace la misma llamada a la API que en el ejemplo anterior, pero esta vez usa await para esperar la respuesta y el try/catch para manejar los errores. La función displayUserData también utiliza await para esperar que se resuelva la promesa retornada por getUserData y luego muestra el nombre del usuario en la consola.

---

# Regular Expressions ( regex )

- Es una secuencia de caracteres para buscar y remplazar.
- **search()** Busca una cadena para un valor especificado y devuelve la posición de la coincidencia.
- **replace()** Reemplaza un valor con otro valor en una cadena.

---

# JSON ( JavaScript Object Notation )

- Formato para **almacenar y transportar datos** desde el server.
- "key":value
  🧑‍💻 `'{"name":"Chris", "age":30}'`
- **JSON.stringify()** Convierte un _objeto JS a un JSON_.
- **JSON.parse()** Convierte un _JSON a un JS object o array_

## Trabajar con "Dates"

🧑‍💻

```
 // usando callback para leer dates
 const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
 const obj = JSON.parse(text, function (key, value) {
   if (key == "birth") {
     return new Date(value);
   } else {
     return value;
   }
 });

 document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;
```

---

# Coding

- **CamelCase:**
  Usar:

1.  let, const, function: **miNombre**
2.  class: **MiClase**

- **Usar const** para arrays y objects
- **Misunderstanding Floats** usar "\* 10" y luego "/ 10"
- **Performance**
  1- Usar la menor cantidad posible de variables globales.
  2- ( Si no es necesario ) no crear variables.
  3- Almacenar valores en constantes para no recorrer el metodo varias veces
  🧑‍💻

```
let l = arr.length;
for (let i = 0; i < l; i++) {
```

---

# Display

- 🚩 **innerHTML** modificar elementos HTML existentes
- **document.write()** agregar nuevo contenido

---

# Pendiente 🤘 🐲

---
# Hola Javascript

🔑 Guia rapida y notas

## Antes de iniciar: hola-mundo

En JS todo es un objeto (excepto los primitivos), por ejemplo:
  `console.log('Hola mundo');`
    Se debe entender como: objeto.funcion(argumento);

ES6, ECMAScrip 2015

# Teoría
**¿Que es JS?** Javascript es un leguaje para _programar aplicaciones web_.
 
**Caracteristicas:**
- Dinámico.
- Interpretado.
- Orientado a objetos.
- Débilmente tipado.

# Fundamentos

## Scripts

**Cargar al final** (si es posible) **para dar prioridad** a .html y .css:

  `<script src="script.js"></script>`

🥷🏻 Recuerde: Buscar que el _usuario este enganchado_.

## Primitivos

**O primitive value:** Es un valor que no tiene propiedades o métodos y es inmutable.

🦖 Null, int, string son primitivos

## Uso de var

No usar, da _problemas con el scope_ global! 
  🔑 Porqué es reasignable.

🥷🏻 Usar solo en caso de requerimiento (compatibilidad).

## Inicialización 

La más comun es: 
  🛠 < tipo > < nombre > = < valor >;
    `const x = 1;`

## Nombrar clases y variables

- _variables_: usar **camelCase**
- _clases_: usar **UpperCamelCase**
- _variables privadas_: iniciar con **_guionbajo**
- _archivos y ficheros_: nombrar con **snake-case**

## typeof 

Es un operador que se utiliza para _retornar el tipo de datos_ de un valor.

🥷🏻 Usarlo para verificar y validar valores

## ¿Modo estricto? 

Conjunto de reglas y características que proporcionan _mayor seguridad y control_.

## Operadores 
- Igualdad "=="
- 🔑 Mismo valor y tipo "==="
- Diferente valor o tipo: !==
- 🔑 Object.is(): para comparar NaN y -0 & +0

  ```
    const value = 25;

    if (typeof value === "number") {
      // codigo..
    }
  ```

## Usar template strings

Usar para definir **cadenas que permite la incrustación de expresiones y el formateo**
  `const nombre="Chris"; console.log(`Hola ${nombre}`);`

🥷🏻 En windows usar: alt+96

## ¿Que es coerción - casteo?
 1. Conversión automática ( implícita )
    `const value = 10; // ahora value es de tipo int  `
 2. Casteo ( explícita )
    - parseInt()
    - parseFloat()
    - toString()

## Truthy & falsy

🦖 Valores verdaderos y falsos: 0, "", NaN, undefined o null. Todo valor que no sea falsy es truthy.

## Debugging

Usar para **detener la ejecución** del código.

```
 let numero = 5;
 debugger;
```

## Scope ( Ambito de aplicacion )

Determina el alcance o **accesibilidad que tiene cada variable**.

1. Function scope
2. Global scope
3. Block scope

### Block scope
- Las variables pueden ser accedidas desde el bloque.
- 🦖 El codigo que está dentro de {}.

## Hoisting ( Elevación )

Se da cuando las declaraciones de variables y funciones son **desplazadas a la parte superior del scope más cercano**.

```
 console.log(name); // undefined
 var name = "Bard";

 console.log(greet()); // "Hola, Bard!"
 function greet() {
  return "Hola, Bard!";
 }
```
  🛠 name y greet() se usan antes de ser declaradas. 
  🦖 **Esto NO produce un error** porqué se "hoistea".

🔑 Solo funciona con las declaraciones de variables y funciones.
🥷🏻 Tratar de declarar variables arriba.

## 🔑 this 

Se refiere al _objeto actual_ en el que se está ejecutando el código.
  
🛠 Ejemlos:  
- En funciones: al objeto en el que se define la función.
- En objetos: al objeto en sí.
- En constructores: al nuevo objeto que se está creando.

---

# 👑 Funciones

## Funcion Declarativa

🦖 Funcion "normal"

- 🧑‍💻

```
  function sumar() {
     return 5 + 3;
 }
  sumar(5,3);
 // 🤖 con parametros opcionales o default
 function resta( a, b=3 ) {
     return a - b;
 }
 resta(5);
```

## Funcion de Expresión ( anonima )

🦖 Se definen "como una expresión!" Se puede asignar a una variable.

🤖 Usar para:
1.  Tareas cortas
2.  Para funciones que solo se necesitan en un lugar
3.  Como parámetros de otras funciones.
4.  Como valores de retorno de otras funciones.
5.  Como filtros o validadores.
6.  Para manejar eventos.

- 🧑‍💻

```
 // uso 1
 const imprimirMensaje = () => {
  console.log("Hola, mundo!");
 };
 imprimirMensaje();

 // uso 2
 let sumar= function (a,b){ return a + b }`
```

## IIFE (Immediately Invoked Function Expression)

🦖 Función que se autoejecuta inmediatamente después de ser definida

- Es anónima!
- No se puede reutilizar!

🧑‍💻
```
 (function () {
 console.log("Soy una funcion");
 })();
```

## Funcion Flecha - Arrow function

🦖 Funciones de una sola línea

🧑‍💻 (argumentos) => expresión que se evalúa y se devuelve

```
 const nombre = "Chris";
 const saludar = () => console.log("Hola " + nombre);
 saludar(); // Imprime 'Hola Chris'

```

## Métodos 
**Call()** Se usa para: llamar a una función con un valor específico para this. (objeto en diferente contexto) o llamar a una función con un número variable de argumentos. 

**Apply()** Se usa para: llamar a una función con un valor específico para this y con un array de argumentos o para llamar a una función con un array de argumentos que se genera dinámicamente. 

**Bind()** Se usa para: crear nuevas funciones con un valor específico para this o con una lista de argumentos predefinida.

## Closures
"Un closure en JavaScript es una función que tiene acceso al ámbito léxico en el que fue creada, incluso después de que la función que lo creó haya cerrado. Esto significa que una función interna puede acceder a las variables declaradas en la función externa, incluso si la función externa ya ha terminado de ejecutarse."
- Permite a las funciones recordar el estado de su entorno de ejecución.
- Se crea cuando una función es declarada dentro de otra función.
- Se usa para crear funciones genéricas y reutilizables.

**¿Que es Ámbito léxico?** Se refiere al alcance de una variable siguiendo la cadena de scopes.

Se usa para:
- Crear funciones privadas
- Crear funciones que tengan acceso a datos que se inicializan en el momento de la creación de la función
- Crear funciones que devuelvan otras funciones
- Crear funciones que modifiquen el comportamiento de otras funciones

### Higher-Order Functions

- 🤖 Es una función que toma una o más funciones como argumentos y/o devuelve una función como resultado.
- Permiten abstraer conceptos comunes en las operaciones de las funciones y permiten la reutilización de código.

## Más

- **Funciones declarativas se mueven al principio** del ámbito por lo que se pueden llamar antes de su definición.
- 🤖 **Funciones de expresión y flecha NO se elevan** por lo que solo se pueden llamar después de su definición.
- **Funciones declarativas tienen alcance de función**.
- **Funciones de expresión tienen alcance de variable**.
- Parámetro variables que se declaran en la definición de una función.
  - 🦖 **Rest** parámetro que puede tomar un número indefinido de argumentos. Ejemplo: (...numbers), considerarlo como un array. 
- Argumento valores que se pasan a una función cuando se invoca.
- Los argumentos se pasan por valor.
- 🚩 Los objetos se pasan por referencia.

---

# Estructuras de control

- **if** Seleccion _unica_
- **switch** Selección _multiple_
- 🚩 **Operador ternario**

  Evaluar una _condición y devolver un valor_ en función del resultado

  🧑‍💻 condicion ? valor_si_verdadero : valor_si_falso;
    `const result2 = number > 10 ? "Mayor que 10" : "Menor o igual que 10";`

---

# Ciclos

- **for** _Conocemos la cantidad_ de repeticiones
- **for..in** para iterar sobre las _propiedades_ enumerables de un objeto 🦖
- **for..of** para iterar sobre los _elementos_ de una colección iterable 🦖
- **forEach()** función de callback que se utiliza para iterar sobre una colección de elementos y ejecutar una función para cada elemento de la colección.
- **While** _No conocemos la cantidad_ de repeticiones

---

# 👑 Objetos
## ¿Que es un objeto?
En Javascript "Un objeto es una **colección de propiedades**".
 
**¿Que son propiedades?** Las propiedades **definen las características** del objeto.
 
## 🦖 Notas:
- Clave: valor
- _Usar const_ para declarlos
- 🤖 En Javascript _TODO es un objeto_ excepto por los primitivos y las funciones

## Crear objetos
1. 🚩 object literal
2. new Object() 
3. Métodos Constructores
4. Object.create()
🧑‍💻 
 ```
  const auto = {marca: "BMW", modelo: "X6"}; //object literal
 ```

## Acceder a los objetos
1. 🚩 Notación de punto: `objectName.propertyName;`
2. Notación de corchetes: `objectName["propertyName"];`

## Iterar objetos

2. Bucle for..of
1. 🚩 Bucle for..in
3. Object.keys() retorna un _array con las claves_.
4. Object.values() retorna un _array con los valores_. (incluye valores heredados de los prototipos)
5. Object.entries() retorna un _array con las parejas clave-valor_ enumerables del objeto

## 🦖 Trabajando con objetos
**Object.assign()** para copiar de un objeto a otro objeto.

🧑‍💻
 ```
  const objeto1 = {a: 1, b: 2}; const objeto2 = {c: 3, d: 4};
  const nuevoObjeto = Object.assign({}, objeto1, objeto2);
  console.log(nuevoObjeto); // Output: {a: 1, b: 2, c: 3, d: 4}
 ```

**Object.values()** convertir un objeto a arreglo.

**JSON.stringify()** convertir un objeto a string.

**Object.freeze()** impedir que sea modificado.

**Object.defineProperty()** controlar el acceso a las propiedades y modificar su comportamiento.

**Object.getOwnProperties** retorna un array con todas las propiedades de un objeto.

**hasOwnProperty()** retorna un booleano indicando si un objeto tiene una propiedad.

**Métodos set() & get()** métodos especiales para:
- Validar los valores asignados a una propiedad
- Convertir los valores antes de asignarlos a una propiedad
- Guardar el estado de una propiedad en una variable privada

## Más
- Usar **objetos literales** es la forma _más sencilla_ y rápida.
- Usar **new Object()** para crear _objetos que se extenderán_ de otros objetos, o objetos vacios!
- 🤖 Usar **métodos Constructores** es la forma _más flexible_, permite crea una plantilla, se puede "personalizar" y asginar valores por defecto.
- Usar **Object.create()** para crear un nuevo objeto con un prototipo especificado, o crear objetos que heredan de otros objetos.
- 🤖 **Los valores primitivos son más rápidos!** 
- **Set** es una colección de valores únicos.
---

# Maps
Objeto que almacena pares de clave-valor. Son útiles para almacenar datos donde el orden de los pares clave-valor es importante.

## Ejemplo: almacenar datos de configuración

🧑‍💻 JSON

```
 {
   "apiKey": "1234567890",
   "baseUrl": "https://example.com"
 }
```

- Podemos usar un Map para almacenar la configuración de la app

🧑‍💻

```
 const config = new Map();

 config.set("apiKey", "1234567890");
 config.set("baseUrl", "https://example.com");

 const apiKey = config.get("apiKey");
 const baseUrl = config.get("baseUrl");
```

- Este código creará un Map con dos elementos:

1. La clave apiKey con el valor "1234567890".
2. La clave baseUrl con el valor "https://example.com".

---


# Array []

🚀 Estructura de datos que permite almacenar una colección de datos del mismo tipo.
- Es un tipo de objeto
- Es una "lista"
- 🥷🏻 Recordar: declarar usando const
  
## 🛠 Declarar e inicializar 

```
 let myInts = new Array(3);
 myInts = [5,0,6];

 let myStrings = ["blue", "white", "red"]; // 👑

 let store = [
  { product: "Bike", price: 1500 },
  { product: "TV", price: 1800 }
 ]
```

## 

**indexOf()**
Encontrar la _posición de un valor_, sino retornara -1.
myInts.indexOf(6);

**forEach()**
Ejecutar una función para cada uno de los elementos.
**No retorna ningún valor.**
🧑‍💻

```
 myInts.forEach(( element ) =>  {
 console.log(element);
 });
```

## Métodos mutables ( modifican el array )

Cambian su estado actual

**push()** agregar

```
 myInts.push(7);
 console.log(myInts);// [ 5, 0, 6, 7 ]
```

**unshift()** agregar

```
 myInts.unshift(0);
 console.log(myInts);// [0, 5, 0, 6]
```

**pop()** eliminar

```
 myInts.pop();
 console.log(myInts);// [ 5,0 ]
```

**shift()** eliminar

```
 myInts.shift();
 console.log(myInts);// [ 0,6 ]
```

### Más

- **splice()** agrega o elimina elementos del array.
- **sort()** ordena los elementos del array.
- **reverse()** invierte el orden de los elementos del array.
- **fill()** rellena todos los elementos del array con un valor específico.
- **copyWithin()** copia una parte del array y la pega en otra parte del mismo array.

## Métodos inmutables ( Crean un nuevo array )

**filter()**
Nuevo array con todos los elementos que pasan una condición
🧑‍💻

```
 let workingFilter = articulos.filter(function (articulo) {
 return articulo.costo <= 500
 })
 console.log(workingFilter)
```

**map()**
Nuevo array a partir de un array existente, aplicando una función a cada elemento del array original.
🧑‍💻

```
 let workingMap = articulos.map(function (articulo) {
 return articulo.nombre
 })
 console.log(workingMap)
```

**find()**
Encontrar el primer elemento que cumpla con la condición. Sino retornará undefined.
🧑‍💻

```
 var workingFind = articulos.find(function (articulo) {
 return (articulo.nombre = "Laptop")
 })
 console.log(workingFind)
```

**some()**
Retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición.
🧑‍💻

```
 let workingSome = articulos.some(function (articulo) {
 return articulo.costo <= 700
 })
 console.log(workingSome)
```

### Más metodos

- **concat()** une dos o más arrays en uno nuevo.
- **slice()** devuelve una copia de una parte del array original.
- **every()** devuelve true si todos los elementos pasan la condición en una función.
- **findIndex()** devuelve el índice del primer elemento que pasa la condición especificada en una función.
- **reduce()** aplica una función acumuladora a cada elemento del array, y devuelve un único valor.
- **reduceRight()** aplica una función acumuladora a cada elemento del array en orden inverso, y devuelve un único valor.

## Array.from()

_Crear un nuevo array_ a partir de un _objeto iterable_.
🧑‍💻

```
 let myArray = Array.from('hello');
 console.log(myArray); // ["h", "e", "l", "l", "o"]
```

## Array(n).fill()

Llena todos los elementos de un array con un valor específico
🧑‍💻 `let myArray = new Array(5).fill(0); // [0, 0, 0, 0, 0]`

## Array.isArray()

Determinar si un objeto es un array o no.
🧑‍💻 `console.log(Array.isArray(myArray)); // true`

## Spread operator

Expandir un iterable en sus elementos individuales.
🧑‍💻

```
 const originalArray = [1, 2, 3, 4];
 const copiedArray = [...originalArray];
```

## Arrays Bidimensionales ( arrays de arrays )

🧑‍💻

```
 const matrix = [];
 matrix[0] = [1, 2, 3];
 matrix[1] = [4, 5, 6];
 matrix[2] = [7, 8, 9];
 console.log(matrix);
```

## Array.protoype.includes()

Función para determinar si un elemento existe en un array.
Sin tener que recorrer todo el array.

🧑‍💻

```
 const numbers = [1, 2, 3, 4, 5];
 const result = numbers.includes(3);
 console.log(result); // true
```

/_El método también puede buscar objetos y otros tipos de datos. Sin embargo, se realiza utilizando la comparación de igualdad estricta "==="
Sólo se considerarán iguales dos objetos si se refieren a la misma ubicación en memoria._/

## Array.protoype.join()

Convertir todos los elementos de un array en un solo string.
🧑‍💻

```
 const fruits = ["apple", "banana", "cherry"];
 const fruitsString = fruits.join(", ");
 console.log(fruitsString); // "apple, banana, cherry"
```

## Array.prototype.flat()

Combinar varios arreglos en un solo arreglo (sin niveles adicionales de anidamiento).
Puede aceptar un argumento opcional, que indica la profundidad de anidamiento máxima hasta la cual se deben aplanar los arreglos.
🧑‍💻

```
 const multiDimensionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
 const flatArray = multiDimensionalArray.flat();
 //const flatArray = multiDimensionalArray.flat(1); en este caso indica el valor opcional
 console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Array.prototype.flatMap()

Combina Array.prototype.map() y Array.prototype.flat().
Para transformar cada elemento del arreglo, luego aplana el resultado hasta obtener un único arreglo con los elementos resultantes.

🧑‍💻

```
 const numbers = [1, 2, 3, 4];

 const result = numbers.flatMap(x => [x, x * 2]);

 console.log(result); // Output: [1, 2, 2, 4, 3, 6, 4, 8]
```

Puede ser útil para eliminar elementos null o undefined de un arreglo 🤖
🧑‍💻

```
 const values = [1, 2, 3, null, 4, undefined, 5];

 const result = values.flatMap(x => x);

 console.log(result);
 // Output: [1, 2, 3, 4, 5]
```

---


# Seleccionar elementos HTML

- Obtener datos desde el HTML:
- 🧑‍💻 `const input1 = document.querySelector("#id");`

# Modificar elementos HTML

- Modificar el DOM
- 🧑‍💻 `h1.innerHTML = 'Practicando JS';`

- Modificar atributos
- 🧑‍💻 `h1.setAttribute('class', 'mySecondClass')`

- Agregar una clase
- 🧑‍💻 `h1.classList.add(mySecondClass);`

---

# Eventos


- Son el resultado de que algo que ocurre en el HTML
- Se usan para interactuar con el usuario, responder a cambios o validar acciones
  addEventListener( nombre_del_evento, funcion )

🧑‍💻

```
 const boton = document.querySelector("button");

 boton.addEventListener("click", () => {
   console.log("El botón fue clicado!");
 });
```

**usar on** si el evento está "conectado" a un elemento. 🤖

**Event Handlers**

- "Manejadores de Eventos" son funciones que se ejecutan cuando ocurre un evento.
- Se utilizan para responder al usuario y para el comportamiento de la página.

**¿Que es EventListener - eventHandler?** Es la funcion de JS que es ejecutada cuando ocurre un evento especifico.

---



# 🤘 Asincronismo

- 🤖 Las operaciones no bloquean el hilo de ejecución principal.
- 🦖 Varias operaciones pueden ocurrir al mismo tiempo.

## Promesas

Permiten que una función asíncrona devuelva un valor que **estará disponible en el futuro**,

- de manera exitosa (resolve)
- con un error (reject).

**simple**
🧑‍💻

```
 const promise = new Promise((resolve, reject) => {
 setTimeout(() => {
 resolve(42);
 }, 2000);
 });
```

**then**
🧑‍💻

```
 const promise = new Promise((resolve, reject) => {
 setTimeout(() => {
 resolve({ number: 42, text: "hello" });
 }, 2000);
 });
 promise
 .then((result) => {
 const doubledNumber = result.number \* 2;
 return doubledNumber.toString();
 })
 .then((result) => {
 console.log(`The result is ${result}`);
 })
 .catch((error) => {
 console.error(error);
 });
```

**setInterval y setTimeout**

- Los temporizadores para programar tareas para que se ejecuten en el futuro.
- son funciones asincrónicas!

### setTimeout

- Permite programar una tarea para que se ejecute después de un cierto período (milisegundos)
- 🧑‍💻

  ```
  setTimeout(() => {
  console.log('Han pasado 5 segundos');
  }, 5000);
  ```

- setTimeout() retorna un identificador único (un número) que puede ser utilizado para cancelar el temporizador antes de que se ejecute. Con la función clearTimeout() y pasarle el identificador como argumento.

- 🧑‍💻

  ```
  let id = setTimeout(() => {
  console.log('Han pasado 5 segundos');
  }, 5000);

  // Cancelar el temporizador
  clearTimeout(id);
  ```

### setInterval

- Para programar una tarea para que se repita en un intervalo de tiempo determinado.

- 🧑‍💻
  ```
  setInterval(() => {
  console.log('Han pasado 2 segundos');
  }, 2000);
  ```

## Callback

- Son funciones que se pasan como argumentos a otra función y se llaman en algún momento después de que se complete la operación asíncrona.
- 🧑‍💻

  ```
  function getUserData(userId, callback) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(error))
    }

    function displayUserData(data) {
    console.log(data.name);
    }

    getUserData(1, displayUserData);
  ```

### Antipatron Callback Hell

- 🧑‍💻

  ```
  operation1(function(result1) {
  operation2(result1, function(result2) {
      operation3(result2, function(result3) {
      operation4(result3, function(result4) {
          // ...continuar con más operaciones
      });
      });
  });
  });
  ```

- Solucion: utilizar Promesas o Async/Await, que proporcionan una forma más estructurada y fácil de leer para manejar código asíncrono.

- 🧑‍💻

  ```
  operation1()
  .then(result1 => {
      return operation2(result1);
  })
  .then(result2 => {
      return operation3(result2);
  })
  .then(result3 => {
      return operation4(result3);
  })
  .then(result4 => {
      // ...continuar con más operaciones
  })
  .catch(error => {
      // Manejar errores
  });
  ```

- En este ejemplo, cada operación devuelve una Promesa que se encadena usando el método then(). Esto hace que el código sea más legible y fácil de seguir en comparación con la versión anterior.

## Async/await

- En lugar de usar callbacks anidados, async/await permite que el código parezca más secuencial y fácil de leer.

- 🧑‍💻

  ```
  async function getUserData(userId) {
  try {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const data = await response.json();
  return data;
  } catch (error) {
  console.log(error);
  }
  }

  async function displayUserData(userId) {
  const data = await getUserData(userId);
  console.log(data.name);
  }

  displayUserData(1);
  ```

- En este ejemplo, se define una función getUserData que hace la misma llamada a la API que en el ejemplo anterior, pero esta vez usa await para esperar la respuesta y el try/catch para manejar los errores. La función displayUserData también utiliza await para esperar que se resuelva la promesa retornada por getUserData y luego muestra el nombre del usuario en la consola.

---

# Regular Expressions ( regex )

- Es una secuencia de caracteres para buscar y remplazar.
- **search()** Busca una cadena para un valor especificado y devuelve la posición de la coincidencia.
- **replace()** Reemplaza un valor con otro valor en una cadena.

---

# JSON ( JavaScript Object Notation )

- Formato para **almacenar y transportar datos** desde el server.
- "key":value
  🧑‍💻 `'{"name":"Chris", "age":30}'`
- **JSON.stringify()** Convierte un _objeto JS a un JSON_.
- **JSON.parse()** Convierte un _JSON a un JS object o array_

## Trabajar con "Dates"

🧑‍💻

```
 // usando callback para leer dates
 const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
 const obj = JSON.parse(text, function (key, value) {
   if (key == "birth") {
     return new Date(value);
   } else {
     return value;
   }
 });

 document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;
```

---

# Coding

- **CamelCase:**
  Usar:

1.  let, const, function: **miNombre**
2.  class: **MiClase**

- **Usar const** para arrays y objects
- **Misunderstanding Floats** usar "\* 10" y luego "/ 10"
- **Performance**
  1- Usar la menor cantidad posible de variables globales.
  2- ( Si no es necesario ) no crear variables.
  3- Almacenar valores en constantes para no recorrer el metodo varias veces
  🧑‍💻

```
let l = arr.length;
for (let i = 0; i < l; i++) {
```

---

# Display

- 🚩 **innerHTML** modificar elementos HTML existentes
- **document.write()** agregar nuevo contenido

---

# Pendiente 🤘 🐲


# Clases

---

# JavaScript

# Tags
  🦖 nota
  🥷🏻 hack
  🚀 concepto
  🛠 ejemplo
  👑 buena practica
  🔑 importante

# JS Intro

## 🚀 ¿Que es JS? 
- JavaScript es un *leguaje para programar aplicaciones web*.
- 🥷🏻 ECMAScript 202

### Caracteristicas
- Interpretado: No necesita ser compilado.
- Orientado a objetos: Permite crear objetos con propiedades y métodos.
- Basado en prototipos: Hereda características de otros objetos.
- Débilmente tipado: No es necesario declarar el tipo de dato de las variables.
- Dinámico: El tipo de dato de una variable puede cambiar.

## Estructura de directorios
Los archivos deben ir dentro de `src`o `assets`
  1. 👑 `src/app.js`
  2. 🛠 `assets/app.js`
  
🥷🏻 Comandos: crear carpeta `mkdir src`, crear archivo `touch app.js`

## Cargar scripts en el .html
👑 Antes del `</body>` porqué optimiza la carga rápida. 
  - `<script src="myScript.js"></script>`
- 🥷🏻 El orden de los archivos SI importa.

## Usar CamelCase
- Para `let, const, function` usar `"miNombreEs";`
- Para `class` usar `"MiClaseEs";`
- Para `constantes de entorno` usar `MAYUSCULAS`

## Plantillas literales - template strings
👑 Se usa para concatenar valores 🛠 `console.log(`Hola ${nombre}`)`

## Modo estricto
Es un conjunto de reglas y características que proporcionan *mayor seguridad y control* en el código.

## Bundlers - empaquetador
Es una *herramienta que combina archivos .js junto con sus dependencias* en único archivo llamado bundle.
- 🦖 Mejoran el rendimiento y los tiempos de carga.

### 🛠 Vite

1. Configurar el proyecto:  `npm crete vite`
  - Ir a a:  `cd vite-project`
  - Instalar:  `npm install`
  - Ejecutar servidor:  `npm run dev`

2. Instalar dependencias `npm i`

3. Ejecutar producción  `npm run build`
  - Crea el fichero dist

---

# Variables y constantes

## Declarar e inicializar variables
👑 Priorizar el uso de `const`
- 🥷🏻 No usar `var`, da problemas con el scope! `objeto window`

## Algunos tipos de datos 
- null
- undefined
- 🔑 string 
- 🔑 array []
- 🔑 objeto {}
- 🦖 symbol

## Operdor `typeof`
Se usa para *identificar el tipo de dato de un valor*: 🛠 `typeof 007;`

## Coerción - casteo
Es cuando se transforma de un tipo de dato a otro: 🛠 `4 + "7" // 47`

### Explícita
Uso de funciones para transformar el tipo de dato: Boolean(), Number(), String(): 🛠 `String(51) // "51"`

## Truthy y falsy
Son valores verdaderos y falsos cuando se realiza una coerción a booleano: `0`, `""`, `NaN`, `undefined` o `null`.
  - 🦖 Todo valor que no sea falsy es truthy, incluyendo las estructuras vacías de array y objetos: `Boolean([])`, `Boolean({})`

## Scope - ambito de aplicacion
🚀 Es el *alcance o accesibilidad* que tiene cada variable o objeto.

- Global scope
- Function scope
- Block scope
    Las variables pueden ser accedidas desde el bloque de código. (Lo que está dentro de {})

## Hoisting - elevación
🚀 Es cuando las *declaraciones* de variables y funciones son *desplazadas a la parte superior del scope más cercano*.

## Pasar por valor y pasar por referencia

### Por valor
🚀 *Se pasa una copia del valor* de la variable X a la función Y. 
  - 🦖 Es decir, los cambios dentro de la función Y no afectarán a la variable X. 
  - 🥷🏻 Los primitivos son pasados por valor

### Por referencia
🚀 *Se pasa la dirección en memoria* de la variable a la función. 
  - Es decir, los cambios dentro de la función si afectarán a la variable.
  - 🥷🏻 Los objetos, arrays y funciones se pasan por referencia
```
  let primero = { valor: 1 }; let segundo = primero;
  segundo.valor = 20; 
  console.log(primero, segundo) // output 20, 20
```

## Variables de entorno
🚀 Son *valores clave-valor que se definen externamente* al código y pueden ser accedidas y utilizadas durante la ejecución.

### .env 
🦖 Agregar archivo `.env` al `.ignore`

### .env.template
👑 Se usa para indicar cuales variables necesitamos
```
  VITE_API_KEY=
  VITE_BASE_URL=
```

---
  
# Estructuras de control
Son bloques de código que se usan para *tomar decisiones*.

👑 No crear estructuras complejas

## Operadores
- Igualdad ==
- Tipo ===
- Asignación de +=, *=, -=, /=
- Desigualdad por valor !=
- Disyunción &&
- Unión ||
- Negación !

## Operador ternario
👑 Priorizar uso: 🛠 `edad >= 18 ? "Mayorde 18!" : "Menor de 18!"`

## `if`
Estructura de selección única
```
  if (edad >= 18){
      console.log("Mayor de edad")
  } else {
      console.log("Menor de edad")
  }
```

## `switch()`
Estructura de selección multiple
```
 switch (expresion) {
   case 1: {
     break
   }
   default: {
   }
 }
```

## Ciclo `for`
🦖 Se usa cuando conocemos la cantidad de repeticiones.
```
  for (let num = 1; num <= 10; num++) {
    console.log(i)
  }
```

## Ciclo `for in`
Se usa para *iterar sobre las **propiedades enumerables** de un objeto*.

for (variable in objeto) { // código a ejecutar por cada propiedad }
```
  const persona = {nombre: "Juan", apellido: "Pérez", edad: 30};

  for (const propiedad in persona) {
    console.log(propiedad, persona[propiedad]); //output nombre Juan, apellido Pérez, edad 30
  }
```

- 🦖 Itera sobre propiedades heredadas del objeto.
- 🦖 No utilizar sobre arrays si el orden es importante.

## Método `forEach()`
Se utiliza para *iterar sobre los elementos de un array y ejecutar una función* para cada elemento.

array.forEach(funcion(elemento, indice, array) { // código a ejecutar por cada elemento });

```
const numeros = [1, 2, 3, 4, 5];

numeros.forEach(numero => {
  console.log(numero);
});
//output 1,2,3,...
```

- 🦖 No modifica el array original.
- 🦖 Como argumento se puede utilizar función anónima definida previamente.
- 🦖 No tiene valor de retorno, pero puede tenerlo en la función para evitar que se ejecute  código restante.

## Ciclo `for … of`
Se usa para *iterar sobre elementos de objetos iterables* 

for (const elemento of iterable) { // código a ejecutar por da elemento }

``` 
  const frutas = ["manzana", "pera", "banana"];

  for (const fruta of frutas) {
    console.log(fruta);
  }
// output manzana, pera, banana
```

- 🦖 Solo accede al valor de cada uno de los elementos del array! 
- 🦖 Itera sobre valores del iterable, no sobre las propiedades como for...in.
- 🦖 Se puede modificar el elemento dentro del bucle (no recomendado).

## Ciclo While
Se usa cuando NO conocemos la cantidad de repeticiones.

while (condición) {
// Bloque de código
// Cambiar la condición para salir del bucle
}

## Bloque try-catch
Ejecutar código que podría generar un error, y capturar el error en caso de que ocurra.

```
  try { //Código a probar
  } catch (error) { //Código en caso de error
  console.log(error);   }
```

## Expresión `throw new Error`
Crea un nuevo objeto de error con un mensaje.

```
  try {
  const num = 100;
  if (num > 50) {
      throw new Error("El número es mayor a 50");
  }
  } catch (error) {
  console.error(error.message);
  }
```

## Debugger
Se utiliza para detener la ejecución del código en un punto específco.

---

# Funciones ()

🚀 Son *Bloques de codigo que realizan una tarea específica* y se ejecutan cuando son llamados.
- Puede recibir argumentos.
- Puede retornar un valor.
- Son reutilizables.

## 👑 Funcion Flecha - Arrow function
Funciones de *una sola línea*.
```
  const saludar = (nombre) => console.log("Hola " + nombre);
  saludar("Chris");
```

## Funcion Declarativa (normal)
Se procesan en el **hoisting**
```
  function miFuncion(a, b) {
      return a + b;
  }
  miFuncion(a, b); //
```

## Funcion de Expresion
Se definen como una expresión!

Puede ser asignada a una variable `let resultado= function (a,b){ return a + b }`

## IIFE (Immediately Invoked Function Expression)

Función que se **autoejecuta inmediatamente después de ser definida**.
- 🦖 Es anónima!
- No se puede reutilizar!

```
  (function () {
  console.log("Soy una IIFE");
  })();
```

## Caracteristicas

- Las *funciones declarativas se se mueven al principio del ámbito* por lo que se pueden llamar antes de su definición.
- Las *funciones de expresión NO se elevan* por lo que solo se pueden llamar después de su definición.
- Las *funciones declarativas tienen alcance de función*.
- Las *funciones de expresión tienen alcance de variable*.
---

# Objetos {}

## Definición de objeto:
🚀 Es una representación de la realidad
  En el cual sus características se definen como atributos y sus acciones se definen como métodos.

🔑 Se componen de `propiedad: valor`

🦖 Excepto por los primitivos y las funciones, todo es un objeto.

## Declarar e inicializar objetos

```
  let miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    "año": 2024,
    detalle: function () {
        console.log("Es un automovil ")
    }
  }
```
🥷🏻 Usar "comillas" en caso de caracteres especiales

## ¿Como acceder al objeto?

1. Notacion de corchetes `objeto["marca"];`
2. Notacion de punto `miAuto.marca;`

## Borrar propiedad
🛠 Borrar propiedad `delete miAuto.modelo; //borra modelo`

## Agregar propiedad
🛠 Agregar propiedad `miAuto.cilindraje: 1.5; //agrega cilindraje`

## Constructor

La función constructora sirve para crear varios objetos

```
  function Auto(brand, model, year){
      this.marca = brand
      this.modelo = model
      this.año = year
      this.detalle = function () {
          console.log(`Auto ${this.modelo} del ${this.año}.`)
      }
  }
  var miAuto = new Auto("Toyota", "Corolla", 2020)
  var otroAuto = new Auto("Tesla", "Model 3", 2021)
```

## Método Object.assign() 
🚀 Permite copiar las propiedades de un objeto a otro. 
```
  const objeto1 = {a: 1, b: 2};
  const objeto2 = {c: 3, d: 4};
  const nuevoObjeto = Object.assign({}, objeto1, objeto2); // Output: {a: 1, b: 2, c: 3, d: 4}
```

## Método Object.freeze()
🚀 Congela un objeto, impidiendo que sus propiedades directas sean modificadas.
```
  const objeto = {a: 1, b: 2};
  Object.freeze(objeto);
  objeto.a = 3;
  console.log(objeto.a); // Output: 1
```
🥷🏻 Es posible modificar los objetos dentro del objeto!

## Método Object.getOwnProperties
🚀 Devuelve un array con todas las propiedades de un objeto que son de su propiedad, es decir no heredadas.
```
  const objeto1 = {a: 1, b: 2};
  const objeto2 = Object.create(objeto1);
  objeto2.c = 3;
  console.log(Object.getOwnProperties(objeto2)); // Output: ["c"]
```

## Método Object.values().
🚀 Devuelve un array con los valores de todas las propiedades de un objeto, incluyendo las heredadas. 
```
  const objeto1 = {a: 1, b: 2};
  const objeto2 = Object.create(objeto1);
  objeto2.c = 3;
  console.log(Object.values(objeto2)); // Output: [1, 2, 3]
```

## Método Object.entries().
🚀 Devuelve un array con los pares clave-valor de todas las propiedades de un objeto, incluyendo las heredadas. 
```
  const objeto1 = {a: 1, b: 2};
  const objeto2 = Object.entries(objeto1);
  console.log(objeto2); // Output: [["a", 1], ["b", 2]]
```  
## hasOwnProperty().
🚀 Devuelve un booleano indicando si un objeto tiene una propiedad específica que es de su propiedad, es decir, no heredada. Por ejemplo:
``` 
  const objeto1 = {a: 1, b: 2};
  const objeto2 = Object.create(objeto1);
  objeto2.c = 3;
  console.log(objeto2.hasOwnProperty("c")); // Output: true
  console.log(objeto2.hasOwnProperty("a")); // Output: false
``` 
## Iterar objeto
### Bucle for-in
```
  const objeto = {a: 1, b: 2, c: 3};
  for (let propiedad in objeto) {
  console.log(propiedad); // Output: "a", "b", "c"
  }
```
### Object.keys() 
y un bucle for-of. 
```
  const objeto = {a: 1, b: 2, c: 3};
  const propiedades = Object.keys(objeto);
  // Object.keys nos da un array con las keys del objeto
  for (let propiedad of propiedades) {
  console.log(propiedad); // Output: "a", "b", "c"
  }
```
---
# Array []

Es una estructura de datos que sirve para *almacenar colecciones de datos*.
- Es un tipo de objeto
- Pueden almacenar difente tipo de datos.

## Declarar, inicializar, e imprimir

```
  let arr = ["blue", "white", "red"]; // 🥷🏻 mejor opción
  let arr2 = new Array(3); // 🦖 poco comun
  arr = [5,0,6];
  let arr3 = [
    { product: "Bike", price: 1500 },
    { product: "TV", price: 1800 },
    s{ product: "Book", price: 50 }
  ]

  console.log(arr[2]); // 🦖 acceder al elemento [x] (en caso de arreglos de arreglos usar arr[][]...)
  ```

🥷🏻 priorizar uso de forEach() ver abajo

## Parámetro REST

🚀 *Permite recibir un número indefinido de argumentos en una función.* 

🛠 Suma todos los números
```
  function sumar(...numeros) {
    let total = 0;
    for (const numero of numeros) {
      total += numero;
    }
    return total;
  }
```

🦖 El parámetro rest: 
- Debe ser el último parámetro de la función.
- El parámetro rest siempre será un array.

## Spread operator - sintaxis de expansión

🚀 *Permite "desempaquetar" un iterable* en lugares donde se esperan múltiples valores. 
 
```
  const originalArray = [1, 2, 3, 4];
  const copiedArray = [...originalArray];
  console.log(originalArray === copiedArray); // Output: false
```

🦖 Se usa para: 
- Combinar iterables
- Clonar iterables
- Expandir iterables
- Pasar argumentos a funciones de forma dinámica.


## Método indexOf()

Encontrar la posición de un valor específico `arr.indexOf(2);`
- Sino se encuentra retorna -1.

## Método forEach() 🔑
Itera a través del array y llama a una función callback por cada elemento.
- 🥷🏻 La función puede modificar el valor del elemento. no el array!
- 🦖 **No retorna ningún valor.**
  
  ```
  arr3.forEach(function (arr3) {
  console.log(arr3.product);
    })
  ```

## Métodos mutables 🤖

Modifican el array, es decir cambian su estado actual.

### Método push() 

Agregar al final `arr.push(7); // [ 5, 0, 6, 7 ]`

### Método unshift()

Agregar al inicio `arr.unshift(0); // [0, 5, 0, 6]`

### Método pop()

Eliminar al final `arr.pop(); // [ 5,0 ]`

### Método shift() 

Eliminar al inicio `arr.shift(); // [ 0,6 ]`

### Método splice()

Agrega o elimina elementos del array `arr.splice(start, deleteCount, item1, item2, ...);`
  start: índice del primer elemento que se eliminará o insertará.
  deleteCount: número de elementos que se eliminarán.
    🥷🏻 Si deleteCount es negativo: se eliminarán elementos desde el final
  item1, item2: elementos que se insertarán.
`let auxArr = arr.splice(1,1)`

### Más

- sort(): ordena los elementos del array.
- reverse(): invierte el orden de los elementos del array.
- fill(): rellena todos los elementos del array con un valor específico.
- copyWithin(): copia una parte del array y la pega en otra parte del mismo array.

## Métodos inmutables

🥷🏻 Crean un nuevo array!

### 🤖 filter

🦖 Crea un nuevo array con todos los elementos que pasan una condición especificada en una función.

- **Code**
  ```
  let workingFilter = articulos.filter(function (articulo) {
  return articulo.costo <= 500
  })
  console.log(workingFilter)
  ```

### 🤖 map

🦖 Crea un nuevo array con los resultados de llamar a una función para cada elemento del array original.

- **Code**
  ```
  let workingMap = articulos.map(function (articulo) {
  return articulo.nombre
  })
  console.log(workingMap)
  ```

### 🤖 find

**Encontrar el primer elemento de un array que cumpla con la condición**.
Si ningún elemento cumpla con la condición, retornará undefined.

- **Code**
  ```
  var workingFind = articulos.find(function (articulo) {
  return (articulo.nombre = "Laptop")
  })
  console.log(workingFind)
  ```

### 🤖 some

🦖 Retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición.

- **Code**
  ```
  let workingSome = articulos.some(function (articulo) {
  return articulo.costo <= 700
  })
  console.log(workingSome)
  ```

### Otros metodos

- concat(): **une** dos o más arrays en uno nuevo.
- slice(): devuelve una **copia de una parte** del array original.
- every(): devuelve **true si todos** los elementos del array pasan la condición especificada en una función.
- findIndex(): devuelve el **índice del primer elemento del array** que pasa la condición especificada en una función.
  reduce(): aplica una función acumuladora a cada elemento del array, y devuelve un único valor.
  reduceRight(): aplica una función acumuladora a cada elemento del array en orden inverso, y devuelve un único valor.

## Copiar array

### Array.from()

- Crear un nuevo array en base de un objeto.
- **Code** `let myArray = Array.from('hello');
console.log(myArray); // ["h", "e", "l", "l", "o"]`

### Array(n).fill()

- Llenar un array con un valor específico
- **Code** `let myArray = new Array(5).fill(0);
console.log(myArray); // [0, 0, 0, 0, 0]`

### Array.isArray()

- Determinar si un objeto es un array o no.
- **Code** `let myArray = [1, 2, 3, 4];
console.log(Array.isArray(myArray)); // true`


## Arrays Bidimensionales

- Son un tipo de estructura de datos en la que cada elemento es un array y cada uno de esos arrays contiene más elementos (son arrays de arrays).

- **Code** `const matrix = [];
matrix[0] = [1, 2, 3];
matrix[1] = [4, 5, 6];
matrix[2] = [7, 8, 9];
console.log(matrix);`

---

## Array.protoype.includes()

El método Array.prototype.includes es una función para determinar si un elemento determinado existe en un array. Este método es muy útil a la hora de verificar si un elemento específico está presente en un array o no, sin tener que recorrer todo el array.

Este método acepta dos parámetros: el primer parámetro es el elemento que se quiere buscar y el segundo parámetro es el índice desde donde se iniciará la búsqueda. Si el segundo parámetro no se proporciona, la búsqueda comenzará desde el índice 0.

El método includes devuelve un valor booleano que indica si el elemento buscado se encuentra o no en el array. Si el elemento se encuentra en el array, el valor devuelto será true, de lo contrario, el valor será false.

Ejemplo:

const numbers = [1, 2, 3, 4, 5];

const result = numbers.includes(3);

console.log(result); // true
Como se puede ver en el ejemplo anterior, el método Array.prototype.includes se utiliza para determinar si el elemento 3 está presente en el array numbers. La función devuelve un valor booleano de true, lo que indica que el elemento se encuentra en el array.

Además de poder buscar elementos primitivos, como números y cadenas, el método Array.prototype.includes también puede buscar objetos y otros tipos de datos. Sin embargo, es importante tener en cuenta que para objetos y otros tipos de datos, la búsqueda se realiza utilizando la comparación de igualdad estricta (===), lo que significa que sólo se considerarán iguales dos objetos si se refieren a la misma ubicación en memoria.

## Array.protoype.join()

El método Array.prototype.join() se utiliza para convertir todos los elementos de un array en un solo string. Este método recibe como argumento un separador, que es una cadena de texto que se utilizará para separar los elementos del arreglo en el string resultante.

Por ejemplo, si tenemos un arreglo fruits con los siguientes elementos: ["apple", "banana", "cherry"], podemos convertir este arreglo en un string usando el método join como se muestra a continuación:

const fruits = ["apple", "banana", "cherry"];
const fruitsString = fruits.join(", ");
console.log(fruitsString); // "apple, banana, cherry"
En este ejemplo, el separador que se utiliza es una coma y un espacio (, ), pero podemos usar cualquier otra cadena de texto como separador. Si no se proporciona un separador, se usará una coma (,) por defecto.

const fruits = ["apple", "banana", "cherry"];
const fruitsString = fruits.join();
console.log(fruitsString); // "apple,banana,cherry"
Es importante destacar que el método join no modifica directamente el arreglo original, sino que retorna una nueva cadena de texto con los elementos del array original.

## Array.prototype.flat()

El método Array.prototype.flat() permite combinar varios arreglos en un solo arreglo plano (sin niveles adicionales de anidamiento). Este método es útil cuando se trabaja con arreglos multidimensionales y se desea obtener una sola secuencia de elementos en un solo arreglo.

Este método puede aceptar un argumento opcional, que indica la profundidad de anidamiento máxima hasta la cual se deben aplanar los arreglos. Si no se proporciona un argumento, el método aplanará los arreglos hasta el nivel más profundo.

A continuación se muestra un ejemplo de código que utiliza el método Array.prototype.flat() para aplanar un arreglo multidimensional:

const multiDimensionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flatArray = multiDimensionalArray.flat();
console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
En este ejemplo, el arreglo multidimensional multiDimensionalArray se aplanó utilizando el método Array.prototype.flat() y se guardó en la variable flatArray. Luego, se imprime en la consola el valor de flatArray y se puede ver que se trata de un arreglo plano con los elementos del arreglo multidimensional combinados en una sola secuencia.

Además, también es posible aplanar un arreglo multidimensional hasta una profundidad específica utilizando el argumento opcional. Por ejemplo:

const multiDimensionalArray = [[1, 2, 3], [4, [5, 6]], [7, 8, 9]];
const flatArray = multiDimensionalArray.flat(1);
console.log(flatArray); // [1, 2, 3, 4, [5, 6], 7, 8, 9]
En este ejemplo, el arreglo multidimensional multiDimensionalArray se aplanó hasta una profundidad de anidamiento de 1 utilizando el método Array.prototype.flat(1). Esto significa que solo se aplanaron los arreglos de nivel más externo, por lo que el arreglo dentro del arreglo [5, 6] se mantuvo intacto.

## Array.prototype.flatMap()

El método Array.prototype.flatMap() combina las funcionalidades de los métodos Array.prototype.map() y Array.prototype.flat() en uno solo. Para transformar cada elemento del arreglo, luego aplana el resultado hasta obtener un único arreglo con los elementos resultantes.

Este método se aplica a un objeto Array y toma como argumento una función que se aplicará a cada elemento del arreglo. La función aplicada a cada elemento devuelve un nuevo arreglo, y flatMap aplana este arreglo resultante en un único arreglo.

Ejemplo de cómo se puede usar flatMap:

const numbers = [1, 2, 3, 4];

const result = numbers.flatMap(x => [x, x * 2]);

console.log(result);
// Output: [1, 2, 2, 4, 3, 6, 4, 8]
En este ejemplo, la función x => [x, x * 2] se aplica a cada elemento del arreglo numbers. Cada elemento del arreglo numbers es multiplicado por 2 y los dos valores se almacenan en un nuevo arreglo. Luego, el método flatMap aplana todos los arreglos resultantes en un único arreglo.

Además de transformar y aplanar arreglos, flatMap también puede ser útil para eliminar elementos null o undefined de un arreglo. Aquí hay un ejemplo de cómo se puede hacer esto:

const values = [1, 2, 3, null, 4, undefined, 5];

const result = values.flatMap(x => x);

console.log(result);
// Output: [1, 2, 3, 4, 5]
Al igual que el método flat() este nos puede ayudar a trabajar con arrays bidimensionales

Ejemplo

const bidimensionalArray = [[1, 2, 3], [4, 5, 6]];
const result = bidimensionalArray.flatMap(x => x);
console.log(result);
// Output: [1, 2, 3, 4, 5, 6]
El método flatMap aplana cada subarreglo dentro del arreglo bidimensionalArray en un único arreglo resultante. De esta manera, podemos trabajar con arreglos bidimensionales de manera más fácil y eficiente.

---

# Clases

🚀 En JS, las clases permiten crear "plantillas" para objetos con características y comportamientos específicos.

🦖 Por defecto usan el `use scrict`

## Inicializar clases

```
  class Persona{

    nombre = '';

    constructor(nombre='Chris'){
      this.nombre = nombre;
    }

    saludarPersona(){
      console.log("Hola " + this.nombre);
    }

  }
```

---

# 🤘 Cap: Closures 🐲

## 🚩 Definicion

- Es la combinación entre una función y el ámbito en el que esta fue declarada.
- Permite a las funciones recordar el estado de su entorno de ejecución.
- 🤖 Un closure se crea cuando una función es declarada dentro de otra función.
- Se usa para crear funciones genéricas y reutilizables.

- **Code**

  ```
  function counter() {
  let count = 0;
  return function increment() {
      count++;
      return count;
  }
  }
  const myCounter = counter();
  console.log(myCounter()); // Output: 1
  console.log(myCounter()); // Output: 2
  console.log(myCounter()); // Output: 3

  // otro ejemplo -> caso de uso 🐲

  // function moneyBox(coins) {
  //   let saveCoins = 0;
  //   saveCoins += coins;
  //   console.log(`MoneyBox: $${saveCoins}`);
  // }

  // moneyBox(5);
  // moneyBox(5);

  function moneyBox() {
  let saveCoins = 0;
  function countCoins(coins) {
      saveCoins += coins;
      console.log(`MoneyBox: $${saveCoins}`)
  }
  return countCoins;
  }

  const myMoneyBox = moneyBox();
  myMoneyBox(5);
  myMoneyBox(5);
  myMoneyBox(15);

  const moneyBoxAna = moneyBox();
  moneyBoxAna(10);
  moneyBoxAna(20);
  moneyBoxAna(5);

  //otro más

  functionshoppingCart(){
      let cart = [];
      functionaddItems(item){
          cart.push(item);
          console.log(cart);
      }
      return addItems;
  }

  const amazon = shoppingCart();
  amazon("Mouse");
  amazon("Keyboard");
  amazon(`Display 24"`);
  ```

## Ámbito léxico

- Se refiere al alcance de una variable siguiendo la cadena de scopes.

## Las Higher-Order Functions

- 🤖 Es una función que toma una o más funciones como argumentos y/o devuelve una función como resultado.
- Permiten abstraer conceptos comunes en las operaciones de las funciones y permiten la reutilización de código.
- 🐲 map() recibe una función como argumento y la aplica a cada elemento de un array retornando un nuevo array.
- Otros ejemplos son: filter(), reduce(), forEach(), sort() y find().

- **Code**
  ```
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = numbers.map(function(number) {
  return number * 2;
  });
  console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
  console.log(numbers) // Output: [1, 2, 3, 4, 5]
  ```

---

---
# 🤘 Cap: Asincronismo

- Las operaciones no bloquean el hilo de ejecución principal. por lo que varias operaciones pueden ocurrir al mismo tiempo sin afectar el rendimiento del programa.

## Promesas

- Permiten que una función asíncrona devuelva un valor que **estará disponible en el futuro**, de manera exitosa (resolve) o con un error (reject).

- **Code**
  `
  //promesa simple
  const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
  resolve(42);
  }, 2000);
  });

  //usando then

  const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
  resolve({ number: 42, text: "hello" });
  }, 2000);
  });
  promise
  .then((result) => {
  const doubledNumber = result.number \* 2;
  return doubledNumber.toString();
  })
  .then((result) => {
  console.log(`The result is ${result}`);
  })
  .catch((error) => {
  console.error(error);
  });
  `

## setInterval y setTimeout

- Los temporizadores para programar tareas para que se ejecuten en el futuro.
- son funciones asincrónicas!

### setTimeout

- Permite programar una tarea para que se ejecute después de un cierto período (milisegundos)
- **Code**
  ` setTimeout(() => {
console.log('Han pasado 5 segundos');
}, 5000);`

- setTimeout() retorna un identificador único (un número) que puede ser utilizado para cancelar el temporizador antes de que se ejecute. Con la función clearTimeout() y pasarle el identificador como argumento.
- **Code**
  `
  let id = setTimeout(() => {
  console.log('Han pasado 5 segundos');
  }, 5000);

  // Cancelar el temporizador
  clearTimeout(id);
  `

### setInterval

- Para programar una tarea para que se repita en un intervalo de tiempo determinado.

* **Code**
  ` setInterval(() => {
console.log('Han pasado 2 segundos');
}, 2000);`

## Callback

- Son funciones que se pasan como argumentos a otra función y se llaman en algún momento después de que se complete la operación asíncrona.
- **Code**
  `
function getUserData(userId, callback) {
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  .then(response => response.json())
  .then(data => callback(data))
  .catch(error => console.log(error))
  }

  function displayUserData(data) {
  console.log(data.name);
  }

  getUserData(1, displayUserData);
  `

### Antipatron Callback Hell

    + **Code**
    `
    operation1(function(result1) {
    operation2(result1, function(result2) {
        operation3(result2, function(result3) {
        operation4(result3, function(result4) {
            // ...continuar con más operaciones
        });
        });
    });
    });
    `

- Solucion: utilizar Promesas o Async/Await, que proporcionan una forma más estructurada y fácil de leer para manejar código asíncrono. + **Code**
  `  operation1()
.then(result1 => {
    return operation2(result1);
})
.then(result2 => {
    return operation3(result2);
})
.then(result3 => {
    return operation4(result3);
})
.then(result4 => {
    // ...continuar con más operaciones
})
.catch(error => {
    // Manejar errores
});`
  En este ejemplo, cada operación devuelve una Promesa que se encadena usando el método then(). Esto hace que el código sea más legible y fácil de seguir en comparación con la versión anterior.

Async/await
Async/await es una forma más moderna y legible de manejar promesas. En lugar de usar callbacks anidados, async/await permite que el código parezca más secuencial y fácil de leer.

Veamos un ejemplo:

async function getUserData(userId) {
try {
const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
const data = await response.json();
return data;
} catch (error) {
console.log(error);
}
}

async function displayUserData(userId) {
const data = await getUserData(userId);
console.log(data.name);
}

displayUserData(1);

En este ejemplo, se define una función getUserData que hace la misma llamada a la API que en el ejemplo anterior, pero esta vez usa await para esperar la respuesta y el try/catch para manejar los errores. La función displayUserData también utiliza await para esperar que se resuelva la promesa retornada por getUserData y luego muestra el nombre del usuario en la consola.

---

# POO - OOP

## Ejemplo
```
  class Animal {
    constructor(especie) {
      this.especie = especie;
    }
    respirar() {
      console.log("Respirando...");
    }
  }

  class Perro extends Animal {
    ladrar() {
      console.log("Guau!");
    }
  }

  const perrito = new Perro("Canino");
  console.log(perrito.especie); // Output: "Canino"
  perrito.ladrar(); // Output: "Guau!"
```

## Keyword `this`

🚀 Objeto actual en el cual se está ejecutando un método o se esta accediendo a una propiedad.

## Prototipos

🚀 Es un objeto del cual otros objetos heredan propiedades.

Cada objeto tiene una propiedad especial llamada “prototype”, que apunta a otro objeto del cual hereda propiedades. Si un objeto no tiene una propiedad específica, JavaScript busca en su prototipo, y así sucesivamente hasta encontrar la propiedad o llegar al objeto base Object.prototype.

## Abstracción

🚀 Definir una interfaz para interactuar con un objeto o clase, sin tener que conocer los detalles internos de cómo se implementa esa funcionalidad.

## Encapsulamiento

🚀 Los datos y métodos de un objeto deben estar protegidos y no deben ser accesibles directamente desde fuera del objeto.

### Getters y setters

🚀 Son métodos especiales que permiten acceder y modificar las propiedades privadas de un objeto de forma controlada.

## Herencia

🚀 Permite crear nuevas clases a partir de clases existentes, heredando todas sus propiedades y métodos. Esto nos permite reutilizar el código existente y crear jerarquías de clases que comparten comportamiento común.

## Polimorfismo

🚀 Permite que una sola interfaz pueda ser implementada por múltiples clases, permitiendo que diferentes objetos respondan de diferentes maneras a la misma llamada.

En JavaScript, el polimorfismo se logra a través de la herencia de clases y la sobrescritura de métodos. Por ejemplo, si tenemos una clase Animal con un método hablar(), podemos crear subclases como Perro y Gato, y sobrescribir el método hablar() para que cada subclase tenga su propia implementación. De esta manera, podemos llamar al método hablar() en un objeto de tipo Animal y obtener diferentes resultados dependiendo de la subclase.

# Patrones de diseño

## ¿Que son patrones de diseño?
🚀 Son soluciones probadas y aprobadas a problemas recurrentes en la programación. Son una colección de buenas prácticas y soluciones a problemas comunes en la programación. 

## tipos de patrones 
1. creacionales: crear objetos y estructuras complejas
2. estructurales: cómo se combinan los objetos y las clases para formar estructuras
3. de comportamiento: describen la forma en que los objetos interactúan y se relacionan entre sí

## Singleton

Singleton es un patrón de diseño que se utiliza para asegurarse de que una clase tenga solo una única instancia durante toda la ejecución de un programa. Esto significa que, independientemente de cuántas veces se llame a la clase, solo se creará una única instancia y todas las llamadas posteriores se refieren a la misma instancia.

En JavaScript, el patrón Singleton se puede implementar de varias maneras, pero la más común es crear un objeto literal con una función que retorne la única instancia de la clase. Por ejemplo:

const Singleton = (function() {
let instance;

function createInstance() {
const object = new Object({name: 'Singleton'});
return object;
}

return {
getInstance: function() {
if (!instance) {
instance = createInstance();
}
return instance;
}
};
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // True

En este ejemplo, la función anónima se autoejecuta y retorna un objeto con un método getInstance(). Cada vez que se llama a getInstance(), se verifica si ya existe una instancia previa y, de ser así, se devuelve la misma instancia. De lo contrario, se crea una nueva instancia y se retorna.

Otro ejemplo de código es crear una clase y hacer uso de Object.freeze() para evitar la modificación de la instancia:

class Singleton {
constructor() {
if (!Singleton.instance) {
this.name = 'Singleton';
Singleton.instance = Object.freeze(this);
}
return Singleton.instance;
}
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // True
En este caso, se crea una clase Singleton con un constructor que verifica si ya existe una instancia y, de ser así, retorna la misma instancia. De lo contrario, se crea una nueva instancia y se almacena como la única instancia permitida en el programa.

Singleton es útil en situaciones en las que se necesita una única instancia de una clase que se comparta entre diferentes partes del programa. Por ejemplo, en una aplicación de mensajería, podríamos utilizar Singleton para asegurarnos de que solo exista una única instancia de la clase que maneja la conexión con el servidor. De esta manera, podemos evitar la creación de múltiples conexiones al servidor, lo que podría resultar en un rendimiento ineficiente y posibles errores.

Otro ejemplo de aplicación de Singleton podría ser en un sistema de autenticación, donde se quiere asegurar que solo exista una única instancia de la clase que maneja la información del usuario autenticado. De esta manera, podemos mantener una única fuente de verdad para la información del usuario autenticado y evitar posibles errores que pueden surgir de tener múltiples instancias de la misma clase.

Es importante tener en cuenta que Singleton puede ser una solución útil en ciertos casos, pero también puede ser un anti-patrón si se usa en exceso o en situaciones donde no es necesario. Es importante evaluar cuidadosamente si Singleton es la solución adecuada para un problema específico antes de implementarlo.

Factory pattern
El patrón Factory es una técnica que permite crear objetos sin tener que especificar la clase exacta de dicho objeto. En su lugar, la fábrica (o factory) se encarga de determinar la clase correcta en tiempo de ejecución y crear una instancia de dicha clase.

En JavaScript, el patrón Factory se puede implementar de varias maneras, pero una de las más comunes es crear una función que retorne un objeto con las propiedades y métodos necesarios. Por ejemplo:

function createPerson(name, age) {
return {
name: name,
age: age,
sayHello: function() {
console.log(`Hello, my name is ${this.name}`);
}
};
}

const person1 = createPerson('John', 30);
const person2 = createPerson('Jane', 25);

console.log(person1.name); // 'John'
console.log(person2.age); // 25
person1.sayHello(); // 'Hello, my name is John'

En este ejemplo, la función createPerson() toma dos argumentos (nombre y edad) y retorna un objeto con las propiedades name, age y el método sayHello(). Cada vez que se llama a la función createPerson(), se crea un nuevo objeto con las propiedades y métodos especificados.

Otro ejemplo de código es crear una clase Factory:

class PersonFactory {
createPerson(name, age) {
return {
name: name,
age: age,
sayHello: function() {
console.log(`Hello, my name is ${this.name}`);
}
};
}
}

const factory = new PersonFactory();
const person1 = factory.createPerson('John', 30);
const person2 = factory.createPerson('Jane', 25);

console.log(person1.name); // 'John'
console.log(person2.age); // 25
person1.sayHello(); // 'Hello, my name is John'
En este caso, se crea una clase PersonFactory con un método createPerson() que toma dos argumentos y retorna un objeto con las propiedades y métodos especificados. Cada vez que se llama a createPerson(), se crea un nuevo objeto con las propiedades y métodos especificados.

El patrón Factory es útil en situaciones en las que se necesita crear objetos con diferentes propiedades y métodos sin tener que especificar la clase exacta de dicho objeto. Por ejemplo, en una aplicación de comercio electrónico, podríamos utilizar Factory para crear objetos Producto con diferentes atributos como nombre, precio, descripción y categoría, y utilizar la fábrica para crear objetos Producto específicos para cada producto en nuestro catálogo de productos.

Además, el patrón Factory también es útil cuando se desea ocultar la implementación detrás de la creación de objetos. Por ejemplo, si estamos trabajando con una biblioteca de terceros y queremos crear objetos de una clase determinada, podemos utilizar una fábrica para crear objetos en lugar de tener que conocer la implementación detrás de la creación de objetos en la biblioteca de terceros.

## Adapter pattern

El patrón Adapter permite que dos objetos con interfaces incompatibles trabajen juntos. Este patrón se aplica cuando queremos utilizar una clase existente en un sistema, pero su interfaz no cumple con las necesidades de nuestro código.

En JavaScript, podemos implementar el patrón Adapter creando un objeto intermedio que actúe como intermediario entre la clase existente y nuestro código. Este objeto adapter tendrá una interfaz que cumpla con las necesidades de nuestro código y que se comunique con la clase existente mediante la adaptación de sus métodos y propiedades.

Ejemplo de aplicación en JavaScript:

Supongamos que tenemos una clase “Auto” con un método “encender” que recibe un parámetro “llave”. Sin embargo, necesitamos que este método se ejecute sin recibir un parámetro. Para ello, podemos crear un adapter que se encargue de llamar al método “encender” con el parámetro adecuado.

class Auto {
encender(llave) {
console.log('El auto ha sido encendido con la llave:', llave);
}
}

class AutoAdapter {
constructor(auto) {
this.auto = auto;
}

    encender() {
    	this.auto.encender('predeterminada');
    }

}

const miAuto = new Auto();
const adapter = new AutoAdapter(miAuto);

adapter.encender(); // El auto ha sido encendido con la llave: predeterminada
En este ejemplo, creamos una clase “AutoAdapter” que recibe un objeto “auto” y que tiene un método “encender” que llama al método “encender” del objeto “auto” pasándole un parámetro predeterminado. De esta manera, podemos utilizar la clase “AutoAdapter” en nuestro código sin tener que preocuparnos por la recibir un parámetro en el método “encender”.

Otro ejemplo de aplicación del patrón Adapter en JavaScript es cuando deseamos integrar diferentes bibliotecas o componentes en nuestra aplicación. Por ejemplo, podemos tener un componente que utiliza un formato de fecha diferente al que esperamos en nuestra aplicación. Podemos crear una clase adaptadora que proporcione una interfaz compatible con lo que esperamos:

class FechaAdaptador {
constructor(fecha) {
this.fecha = fecha;
}
obtenerFechaFormateada() {
return this.fecha.toLocaleDateString();
}
}

const fecha = new Date();
const fechaAdaptada = new FechaAdaptador(fecha);
console.log(fechaAdaptada.obtenerFechaFormateada());
// Formatea la fecha al formato deseado
De esta manera, podemos integrar componentes externos en nuestra aplicación sin tener que cambiar su comportamiento original. Además, esto también permite mantener la flexibilidad y reutilización de código, ya que podemos reutilizar la clase adaptadora en diferentes partes de nuestra aplicación.

Podemos usar el patrón Adapter en JavaScript cuando queremos utilizar una biblioteca externa en nuestro código, pero su interfaz no cumple con las necesidades de nuestro código. En este caso, podemos crear un adapter que se encargue de realizar la adaptación necesaria para que podamos utilizar la biblioteca de manera efectiva.

En resumen, el patrón Adapter permite adaptar la interfaz de un objeto a otra interfaz que es esperada por el cliente. Esto se logra creando una clase adaptadora que proporcione una interfaz compatible con la que espera el cliente. Este patrón es útil cuando deseamos integrar componentes externos o diferentes bibliotecas en nuestra aplicación de manera eficiente y flexible.

Decorator pattern
El Patrón Decorador en JavaScript permite añadir responsabilidades a un objeto dinámicamente en tiempo de ejecución. Este patrón permite que la funcionalidad se agregue o modifique sin tener que modificar el código subyacente. Esto se logra creando objetos que envuelven al objeto original y proporcionan la nueva funcionalidad.

La aplicación del Patrón Decorador en JavaScript se puede lograr a través de la creación de clases decoradoras. Las clases decoradoras deben tener una estructura similar a la clase que desean decorar y deben invocar a la clase original para proporcionar la funcionalidad adicional.

Ejemplo de aplicación del Patrón Decorador en JavaScript:

// Clase base
class Bebida {
precio() {
return 0;
}
}

// Clase Decoradora
class AgregadoLeche extends Bebida {
constructor(bebida) {
super();
this.bebida = bebida;
}

    precio() {
    	return this.bebida.precio() + 0.5;
    }

}

// Clase Decoradora
class AgregadoChocolate extends Bebida {
constructor(bebida) {
super();
this.bebida = bebida;
}

    precio() {
    	return this.bebida.precio() + 1;
    }

}

// Uso
const bebida = new Bebida();
console.log(bebida.precio()); // 0

const bebidaConLeche = new AgregadoLeche(bebida);
console.log(bebidaConLeche.precio()); // 0.5

const bebidaConLecheYChocolate = new AgregadoChocolate(bebidaConLeche);
console.log(bebidaConLecheYChocolate.precio()); // 1.5

En este ejemplo, creamos una clase base llamada “Bebida” con un método precio que devuelve 0. Luego creamos dos clases decoradoras llamadas “AgregadoLeche” y “AgregadoChocolate” que envuelven a la clase base “Bebida” y proporcionan una nueva funcionalidad. Finalmente, creamos objetos a partir de estas clases y vemos el resultado de invocar el método precio.

El Patrón Decorador es útil en situaciones en las que queremos añadir o modificar la funcionalidad de un objeto de manera dinámica y sin tener que modificar su código subyacente. Por ejemplo, podemos usar este patrón en sistemas de personalización de productos en los que los usuarios pueden seleccionar diferentes opciones o características adicionales para un producto. En este caso, cada opción o característica adicional sería un decorador que se aplicaría al objeto producto original para proporcionar la nueva funcionalidad.

Otro ejemplo de aplicación del Patrón Decorador puede ser en la creación de componentes de interface de usuario en los que se desea agregar diferentes estilos o funcionalidades adicionales a un componente base. En este caso, cada estilo o funcionalidad adicional sería un decorador que se aplicaría al componente base para proporcionar la nueva funcionalidad.

## Builder pattern

El patrón Builder permite construir objetos complejos a partir de objetos más simples, como si fuera un “paso a paso”. Este patrón es muy útil en situaciones donde los objetos a construir tienen muchos atributos o propiedades que deben ser configurados antes de su creación.

Lo interesante está en que consiste en separar la complejidad durante la construcción de un objeto de su representación de manera que con el mismo constructor puedas crear diferentes representaciones.

En JavaScript, podemos aplicar el patrón Builder mediante la creación de una clase constructora que se encarga de construir objetos complejos a partir de una serie de objetos más simples.

Ejemplo de aplicación:

class ProductBuilder {
constructor() {
this.name = '';
this.price = 0;
this.description = '';
}

    setName(name) {
    	this.name = name;
    	return this;
    }

    setPrice(price) {
    	this.price = price;
    	return this;
    }

    setDescription(description) {
    	this.description = description;
    	return this;
    }

    build() {
    	return {
    	name: this.name,
    	price: this.price,
    	description: this.description
    	};
    }

}

const product = new ProductBuilder()
.setName('Laptop')
.setPrice(1000)
.setDescription('Con esta laptop puedes nunca paras de aprender')
.build();

console.log(product);
// {
// name: 'Laptop',
// price: 1000,
// description: 'Con esta laptop puedes nunca paras de aprender'
// }
En este ejemplo, creamos una clase ProductBuilder que tiene métodos para establecer los atributos de un producto, como el nombre, el precio y la descripción. Luego, utilizamos el método build() para construir el objeto final y retornarlo.

De esta manera es mucho más clara la creación de una instancia de la clase. Si lo comparamos con la manera tradicional, tendríamos algo como lo siguiente

class ProductBuilder {
constructor(name, price, description) {
this.name = name;
this.price = price;
this.description = description;
}
}

const product = new ProductBuilder("Laptop", 1000, "Con esta laptop puedes nunca paras de aprender")

console.log(product);
// {
// name: 'Laptop',
// price: 1000,
// description: 'Con esta laptop puedes nunca paras de aprender'
// }
Aunque es mucho menos código y obtenemos el mismo resultado, el mantener este código en un futuro se volverá más complicado debido a que muy poco descriptivo el tener un método constructor al cual le estamos agregando datos arbitrarios.

Otro ejemplo de aplicación del patrón Builder en JavaScript es en la construcción de formularios dinámicos. Por ejemplo, podemos tener una clase FormBuilder que nos permita construir formularios complejos a partir de objetos más simples, como inputs, botones, etc.

class FormBuilder {
constructor() {
this.elements = [];
}

    addInput(type, name, value) {
    	this.elements.push({
    		type: 'input',
    		name: name,
    		value: value
    	});
    	return this;
    }

    addButton(text) {
    	this.elements.push({
    		type: 'button',
    		text: text
    	});
    	return this;
    }

    build() {
    	let form = '

';
this.elements.forEach(element => {
if (element.type === 'input') {
form += `
${element.type}" name="${element.name}" value="${element.value}">`;
} else if (element.type === 'button') {
form += `${element.text}`;
}
});
form += ''
;
return form;
}
}

const form = new FormBuilder()
.addInput('text', 'username', '')
.addInput('password', 'password', '')
.addButton('Submit')
.build();

console.log(form);

/\*

    Submit

\*/
En este ejemplo, creamos una clase FormBuilder que tiene métodos para agregar diferentes elementos a un formulario, como inputs y botones. Luego, utilizamos el método build() para construir el formulario y retornarlo como una cadena de texto con el código HTML correspondiente. Cabe aclarar que este código puede ser mejorado agregando las labels y haciendolo mucho más accesible.

Prototype Pattern
El patrón Prototype es un patrón de diseño que se utiliza para crear objetos a partir de un modelo o prototipo previamente definido. Este patrón es útil cuando queremos crear muchos objetos similares, ya que podemos clonar el prototipo en lugar de crear objetos desde cero cada vez.

En JavaScript, podemos aplicar el patrón Prototype utilizando la propiedad “prototype” de las funciones constructoras. La propiedad prototype permite agregar propiedades y métodos a una función constructora, y estos serán compartidos por todos los objetos creados a partir de ella.

Ejemplo de aplicación del patrón Prototype en JavaScript:

function Animal(name, species) {
this.name = name;
this.species = species;
}

Animal.prototype.makeSound = function () {
console.log('El animal hace un sonido');
};

const dog = new Animal('Fido', 'Perro');
console.log(dog.name); // Fido
console.log(dog.species); // Perro
dog.makeSound(); // El animal hace un sonido
En este ejemplo, creamos una función constructora Animal que tiene dos propiedades: name y species. Luego, agregamos un método makeSound a la propiedad prototype de la función constructora Animal. De esta manera, todos los objetos creados a partir de la función constructora tendrán acceso a este método.

Otro ejemplo de aplicación del patrón Prototype en JavaScript es en la creación de objetos basados en plantillas. Por ejemplo, podemos tener una plantilla de objeto “Persona” con propiedades como nombre, edad y ocupación, y luego clonar esta plantilla para crear objetos de personas individuales.

function Persona(nombre, edad, ocupacion) {
this.nombre = nombre;
this.edad = edad;
this.ocupacion = ocupacion;
}

const plantillaPersona = new Persona('', 0, '');

const persona1 = Object.create(plantillaPersona);
persona1.nombre = 'Juan';
persona1.edad = 30;
persona1.ocupacion = 'Desarrollador';

const persona2 = Object.create(plantillaPersona);
persona2.nombre = 'María';
persona2.edad = 25;
persona2.ocupacion = 'Doctora';

console.log(persona1.nombre); // Juan
console.log(persona2.nombre); // María
En conclusión, el patrón Prototype es una técnica muy útil en JavaScript para crear objetos similares de manera eficiente y organizada. Al utilizar la propiedad prototype de las funciones constructoras, podemos ahorrar tiempo y líneas de código al clonar objetos en lugar de crearlos desde cero cada vez. Además, el patrón Prototype también es útil en la creación de objetos basados en plantillas, donde podemos clonar una plantilla de objeto y luego personalizar las propiedades individuales de cada objeto creado.

## Facade pattern

El Patrón Facade (o fachada en español) en JavaScript es un patrón de diseño que proporciona una interfaz simplificada para un sistema complejo. Este patrón oculta la complejidad del sistema subyacente detrás de una interfaz sencilla y fácil de usar. La idea detrás del patrón Fachada es crear un objeto que actúe como intermediario entre el cliente y el sistema subyacente, simplificando el acceso y la interacción con este último.

Esto se de lo más común cuando usas librerías o frameworks externos, por ejemplo en web algunos frameworks como React, nos dan todas las herramientas para crear aplicaciones web de manera super rápida y sencilla, utilizando abstracciones como lo son sus react hooks para trabajar con temas complejos como la reactividad. Sin irnos tan lejos, las librerías de componentes como MUI, la cual nos da una serie de componentes a los cuales solo le tenemos que pasar algunos argumentos para que nos devuelva elementos HTML estilizados.

Aplicar el Patrón Fachada en JavaScript es muy sencillo. Basta con crear un objeto que actúe como intermediario entre el cliente y el sistema subyacente. Este objeto debe proporcionar una interfaz simplificada para el sistema subyacente y ocultar su complejidad.

Ejemplo de aplicación del Patrón Fachada en JavaScript:

// Sistema subyacente
class SistemaComplejo {
metodo1() {
console.log("Imagina que aquí hay mucho código complejo");
}

    metodo2() {
    	console.log("Imagina que aquí hay mucho código complejo, pero en otro método");
    }

}

// Fachada
class FacadeSystem{
constructor() {
this.sistemaComplejo = new SistemaComplejo();
}

    metodoFacil() {
    	this.sistemaComplejo.metodo1();
    	this.sistemaComplejo.metodo2();
    }

}

// Uso
const fachada = new FacadeSystem();
fachada.metodoFacil();
// Salida:
// Imagina que aquí hay mucho código complejo
// Imagina que aquí hay mucho código complejo, pero en otro método
En este ejemplo, creamos un sistema subyacente complejo llamado “SistemaComplejo” que tiene dos métodos. Luego creamos una clase “FachadaSistema” que actúa como intermediario entre el cliente y el sistema subyacente. Finalmente, creamos un objeto de la clase “FachadaSistema” y vemos el resultado de invocar su método fácil.

Proxy pattern
El Patrón Proxy en JavaScript es un patrón de diseño que proporciona un middleware (o intermediario) para otro objeto para controlar el acceso a él. El objeto proxy actúa como un intermediario entre el cliente y el objeto real, interceptando y controlando las operaciones realizadas sobre el objeto real.

Si nos vamos al lado del backend, estos middlewares son de lo más común con ExpressJS (por ejemplo). Express es un framework para desarrollar API de NodeJS, y una de las características que tiene es el uso de Middlewares. Los middlewares no son más que piezas de código que podemos hacer que se ejecuten antes, en el medio o después de que cualquier solicitud llegue a nuestros puntos finales

El Patrón Proxy se puede implementar de varias maneras en JavaScript, una de ellas es utilizando funciones proxy, que permiten interceptar y controlar el acceso a un objeto. Las funciones proxy reciben un objeto y un manejador como argumentos, y actúan como un intermediario para el objeto, delegando las operaciones a él.

Ejemplo con proxys:

// Objeto original
const objetoReal = {
nombre: 'Objeto Real',
descripcion: 'Este es el objeto real'
};

// Función proxy
const proxy = new Proxy(objetoReal, {

    get(target, prop) {
    	console.log(`Accediendo a la propiedad "${prop}"`);
    	return target[prop];
    },

    set(target, prop, value) {
    	console.log(`Estableciendo valor ${value}" en la propiedad "${prop}"`);
    	target[prop] = value;
    	return true;
    }

});
// Uso

console.log(proxy.nombre);
// Accediendo a la propiedad "nombre" / "Objeto Real"

proxy.descripcion = 'Nueva descripción';
// Estableciendo valor "Nueva descripción" en la propiedad "descripcion"

console.log(proxy.descripcion);
// Accediendo a la propiedad "descripcion" / "Nueva descripción"
En este ejemplo, creamos un objeto real con dos propiedades, “nombre” y “descripcion”. Luego creamos una función proxy que actúa como intermediario para el objeto real, interceptando y controlando las operaciones de lectura y escritura realizadas sobre él. Finalmente, hacemos uso del objeto proxy y vemos cómo se muestran los mensajes de acceso a las propiedades y la actualización de sus valores.

Otra manera de hacer uso del patrón Proxy es usando clases. Por ejemplo, cuando queremos controlar el acceso a una clase o objeto en base a una condición. Suponiendo que tenemos una clase Product que representa un producto en una tienda virtual con los siguientes atributos: name, price y available.

class Product {
constructor(name, price, available) {
this.name = name;
this.price = price;
this.available = available;
}
}
Si queremos controlar el acceso a los productos en base a si el usuario está registrado o no, podemos utilizar un proxy. Para ello, crearemos una clase ProductProxy que actúe como intermediario entre los clientes y los productos.

class ProductProxy {
constructor(product, user) {
this.product = product;
this.user = user;
}

getName() {
return this.product.name;
}

getPrice() {
return this.product.price;
}

isAvailable() {
return this.product.available;
}

buy() {
if (this.user.isRegistered) {
this.product.buy();
} else {
console.log("Error: el usuario no está registrado");
}
}
}
La clase ProductProxy tiene un atributo product que es la instancia del objeto original, un atributo user que representa al usuario y los métodos getName, getPrice, isAvailable y buy. El método buy se encarga de controlar el acceso a los productos en base a si el usuario está registrado o no.

Otro ejemplo de uso del patrón Proxy en Javascript es cuando queremos crear una versión simplificada de un objeto complejo. Por ejemplo, supongamos que tenemos un objeto complejo como el siguiente:

const complexObject = {
prop1: "value1",
prop2: "value2",
prop3: {
nestedProp1: "nestedValue1",
nestedProp2: "nestedValue2",
nestedProp3: {
deeplyNestedProp1: "deeplyNestedValue1",
deeplyNestedProp2: "deeplyNestedValue2"
}
},
prop4: "value4",
prop5: "value5"
};
Si queremos simplificar el acceso a los valores dentro de este objeto complejo, podemos crear un proxy que permita acceder directamente a los valores que necesitamos. Por ejemplo:

const simpleObjectProxy = new Proxy(complexObject, {
get(target, prop) {
if (prop in target) {
return target[prop];
}
return null;
}
});

console.log(simpleObjectProxy.prop1);
// "value1"
console.log(simpleObjectProxy.prop3.nestedProp3.deeplyNestedProp1);
// "deeplyNestedValue1"
// De esa manera nos saltamos el acceder a prop3

## Chain of responsability pattern 🔗

El patrón Chain of Responsibility en JavaScript es un patrón de diseño que permite la distribución de responsabilidades entre múltiples objetos. Este patrón permite que varios objetos puedan manejar una solicitud sin tener que conocer a quién se está enviando la solicitud ni cuál es el objeto que la manejará finalmente.

La aplicación del patrón Chain of Responsibility en JavaScript se logra a través de la creación de una cadena de objetos que se comunican entre sí. Cada objeto de la cadena debe tener una referencia al siguiente objeto en la cadena y debe tener la capacidad de manejar la solicitud si lo desea. Si un objeto no puede manejar la solicitud, la pasa al siguiente objeto en la cadena.

Ejemplo de aplicación del patrón Chain of Responsibility en JavaScript:

// Clase base para las solicitudes
class Solicitud {
constructor(tipo, cantidad) {
this.tipo = tipo;
this.cantidad = cantidad;
this.siguiente = null;
}
}

// Clase manejadora de solicitudes de descuentos
class DescuentoHandler {
constructor() {
this.siguiente = null;
}

    solicitar(solicitud) {
    	if (solicitud.tipo === "descuento") {
    		console.log(`Se aplicó un descuento del 10% por un total de ${solicitud.cantidad * 0.1}`);
    	} else if (this.siguiente !== null) {
    		this.siguiente.solicitar(solicitud);
    	}
    }

}

// Clase manejadora de solicitudes de envío gratis
class EnvioGratisHandler {
constructor() {
this.siguiente = null;
}

    solicitar(solicitud) {
    	if (solicitud.cantidad >= 500) {
    		console.log("Se aplicó envío gratis");
    	} else if (this.siguiente !== null) {
    		this.siguiente.solicitar(solicitud);
    	}
    }

}

// Uso
const descuentoHandler = new DescuentoHandler();
const envioGratisHandler = new EnvioGratisHandler();
descuentoHandler.siguiente = envioGratisHandler;

const solicitud = new Solicitud("descuento", 100);
descuentoHandler.solicitar(solicitud);
// Se aplicó un descuento del 10% por un total de 10

const solicitud2 = new Solicitud("compra normal", 700);
descuentoHandler.solicitar(solicitud2);
// Se aplicó envío gratis

Código corregido por @Energy 💚

En este ejemplo, creamos dos clases manejadoras de solicitudes, DescuentoHandler y EnvioGratisHandler, que se encargan de manejar solicitudes específicas. Luego, establecemos una relación de cadena entre ellos, estableciendo que DescuentoHandler es el primer objeto en la cadena y EnvioGratisHandler es el siguiente.

Cuando se hace una solicitud, se inicia en DescuentoHandler, que verifica si puede manejar la solicitud. Si no puede, pasa la solicitud al siguiente objeto en la cadena, EnvioGratisHandler, que verifica si puede manejarla. Si uno de los objetos en la cadena puede manejar la solicitud, se ejecuta su lógica correspondiente y se detiene la cadena. De lo contrario, la solicitud se pierde y no se ejecuta ninguna acción.

Este patrón es útil en situaciones donde una sola clase no debería ser responsable de manejar todas las solicitudes, y en lugar de eso, se deben dividir entre varios objetos. Además, permite que la lógica de manejo de solicitudes sea fácilmente modificable y escalable, ya que se pueden agregar o eliminar objetos de la cadena sin afectar el comportamiento de los objetos existentes.

Observer pattern 👀
El patrón Observer en JavaScript es un patrón de diseño que permite que un objeto mantenga una lista de sus dependientes y notifique a ellos automáticamente cualquier cambio. Este patrón es útil cuando necesitamos que varios objetos reciban notificaciones de cambios en un objeto determinado.

La aplicación del patrón Observer en JavaScript se logra a través de la creación de un objeto que mantiene una lista de sus dependientes y provee una forma de registrarlos y notificarlos de los cambios. Cada objeto dependiente debe tener una función que se ejecute cada vez que se produzca un cambio en el objeto principal.

Ejemplo de aplicación del patrón Observer en JavaScript:

// Clase Observador
class Observador {
constructor(nombre) {
this.nombre = nombre;
}
notificar(cambio) {
console.log(`${this.nombre} ha sido notificado del cambio: ${cambio}`);
}
}

// Clase Observable
class Observable {
constructor() {
this.observadores = [];
}

    registrarObservador(observador) {
    	this.observadores.push(observador);
    }
    notificarCambio(cambio) {
    	this.observadores.forEach(observador => {
    		observador.notificar(cambio);
    	});
    }

}
// Uso
const observable = new Observable();
const observador1 = new Observador("Observador 1");
const observador2 = new Observador("Observador 2");

observable.registrarObservador(observador1);
observable.registrarObservador(observador2);

observable.notificarCambio("Cambio en el objeto principal");
// Observador 1 ha sido notificado del cambio: Cambio en el objeto principal
// Observador 2 ha sido notificado del cambio: Cambio en el objeto principal
En este ejemplo, creamos una clase Observador y una clase Observable. La clase Observable mantiene una lista de sus dependientes (observadores) y provee una forma de registrarlos y notificarlos de los cambios. Cada vez que se produce un cambio en el objeto principal, se notifica a todos los observadores registrados.

## ¿Qué es una hash table?

Las hash tables son estructuras de datos que permiten almacenar pares clave-valor y acceder a ellos de manera eficiente. La idea detrás de las hash tables es usar una función matemática llamada “función hash” para asignar a cada clave un índice en un arreglo.

El funcionamiento de las hash tables se basa en dos componentes: la función hash y los buckets. La función hash es una función matemática que recibe una clave y la convierte en un índice en el arreglo. Los buckets son celdas en el arreglo donde se almacenan los valores. Cada bucket está asociado a una clave y contiene un valor.

La función hash es importante porque debe asegurarse de que la misma clave siempre produzca el mismo índice, de lo contrario, se perderá la capacidad de acceder a un valor rápidamente. Además, la función hash debe ser lo suficientemente eficiente para procesar un gran número de claves.

Las operaciones más comunes en una Hash Table son la inserción, búsqueda y eliminación de elementos.

Complejidad algorítmica
Si medimos la complejidad de los métodos de la hash table con Big o notation, podremos notar que es de lo más eficiente. Debido a que siempre se mantiene constante.

Algoritmo Big o notation
Inserción O(1)
Búsqueda O(1)
Eliminación O(1)
Hay distintas formas de crear e implementar una hash table en JavaScript, por lo que a continuación te enseñaré una manera para crear una con todos sus métodos.

class HashTable {
constructor(size) {
// Dentro del constructor se inicializa un array con un tamaño arbitrario
// Para asignarlo como el tamaño total de buckets en nuestra hashTable
this.buckets = new Array(size);
this.numBuckets = this.buckets.length;
}

hash(key) {
// Esta función toma una "key" (puede ser una cadena, número, etc.)
// Para poder calcular el índice del bucket donde el valor será almacenado
let total = 0;
// En este caso el algoritmo para crear un hash es muy sencillo

    	// Para calcular el hash, se suman los valores ASCII de cada caracter de la key
    	// y se toma el resto de la división de esta suma entre el total de buckets.
    for (let i = 0; i < key.length; i++) {

      total += key.charCodeAt(i);
    }
    return total % this.numBuckets;

}

insert(key, value) {
// Este método toma una key y un value, y los almacena en la hash table
// Primero se calcula el índice usando la función hash
let index = this.hash(key);
// si ese bucket no existe, se inicializa como un array vacío.
if (!this.buckets[index]){
this.buckets[index] = [];
}

    	// Luego se agrega un arreglo con la key y el value al bucket
    this.buckets[index].push([key, value]);

}

get(key) {
// Esta función toma una key y retorna el valor almacenado en la hash table
// Primero se calcula el índice usando la función hash
let index = this.hash(key);

    	// si ese bucket no existe, se retorna null.
    if (!this.buckets[index]){
    		return null
    	}

    	// Si el bucket existe, se recorre el array en busca de un arreglo
    	// que tenga la key especificada
    for (let i = 0; i < this.buckets[index].length; i++) {

    		// Si se encuentra ese bucket, se retorna su value correspondiente.
      if (this.buckets[index][i][0] === key) {
        return this.buckets[index][i][1];
      }
    }

    	//Si no se encuentra la key, se retorna null.
    return null;

}

retrieveAll() {
// Esta función retorna un array con todos los valores almacenados
// Se recorren todos los buckets y, si existen, se agrega cada value a un array
let allValues = [];
for (let i = 0; i < this.numBuckets; i++) {
if (this.buckets[i]) {
for (let j = 0; j < this.buckets[i].length; j++) {
allValues.push(this.buckets[i][j][1]);
}
}
}
// Para finalmente retornarlo.
return allValues;
}
}
Los ejemplos de uso de las hash tables son muy variados. Por ejemplo, se pueden usar para implementar cachés, para hacer búsquedas en grandes cantidades de datos, para implementar diccionarios y mucho más.

# Set en JavaScript

Los sets en JavaScript son objetos similares a los arrays que permiten almacenar valores únicos. Estos valores pueden ser cualquier tipo de datos, incluyendo números, cadenas, objetos o incluso otros sets. Una de las principales diferencias entre los sets y los arrays es que los sets no permiten duplicados, mientras que los arrays sí.

Crear un Set no es nada complejo, con la siguiente linea puedes crear uno:

let set = new Set();
También es posible crear un set a partir de un arrays existente:

let array = [1, 2, 3, 4, 5];
let set = new Set(array);
Los métodos más utilizados de los sets son los siguientes:

add(value): este método agrega un valor único al set. Si intentamos agregar un valor que ya existe en el set, no ocurrirá nada.
delete(value): este método elimina un valor específico del set.
has(value): este método verifica si un valor determinado existe en el set. Devuelve true si existe y false en caso contrario.
clear(): este método vacía completamente el set.
size: este atributo devuelve la cantidad de elementos que existen en el set.
Ejemplos de uso de set 👇:

let set = new Set();

// Agregar elementos al set
set.add(1);
set.add(2);
set.add(3);

// Si llamamos a nuestro set directamente, este nos devolerá todo su contenido
console.log(set) // Output [1,2,3]

// Verificar si un elemento existe en el set
console.log(set.has(2)); // Output: true

// Eliminar un elemento del set
set.delete(2);

// Verificar si un elemento existe en el set después de ser eliminado
console.log(set.has(2)); // Output: false

// Vaciar el set
set.clear();

// Verificar el tamaño del set después de ser vaciado
console.log(set.size); // Output: 0
Es importante destacar que los sets son una estructura de datos útil para almacenar valores únicos y para realizar operaciones simples de agregar, eliminar y verificar si existe un valor determinado. Sin embargo, si se necesita iterar sobre los elementos de un set, es necesario convertirlo previamente a un arreglo o usar un bucle.

## Maps en JavaScript

Los Maps (no confundir con el método map de los arrays) en JavaScript son estructuras de datos que permiten almacenar pares clave-valor y acceder a ellos de manera eficiente. A diferencia de los objetos regulares, las claves en un Map pueden ser de cualquier tipo de dato, incluyendo objetos, funciones y valores primitivos. Los Maps son especialmente útiles cuando se necesitan realizar búsquedas rápidas de valores asociados a una clave determinada.

Para crear un Map, se puede utilizar la siguiente sintaxis:

let map = new Map();
También es posible crear un Map a partir de un arreglo de pares clave-valor:

let array = [["key1", "value1"], ["key2", "value2"]];
let map = new Map(array);
Los métodos más utilizados de los Maps son los siguientes:

set(key, value): este método agrega un par clave-valor al Map.
get(key): este método devuelve el valor asociado a una clave determinada. Si la clave no existe, devuelve undefined.
has(key): este método verifica si una clave determinada existe en el Map. Devuelve true si la clave existe y false en caso contrario.
delete(key): este método elimina una clave y su valor asociado del Map.
clear(): este método vacía completamente el Map.
size: este atributo devuelve la cantidad de pares clave-valor que existen en el Map.
Ejemplos de uso de Map 👇:

let map = new Map();

// Agregar pares clave-valor al Map
map.set("key1", "value1");
map.set("key2", "value2");
map.set(3, "value3");

// Obtener el valor asociado a una clave
console.log(map.get("key1")); // Output: "value1"

// Verificar si una clave existe en el Map
console.log(map.has("key2")); // Output: true

// Eliminar una clave del Map
map.delete("key2");

// Verificar si una clave existe en el Map después de ser eliminada
console.log(map.has("key2")); // Output: false

// Vaciar el Map
map.clear();

// Verificar el tamaño del Map después de ser vaciado
console.log(map.size); // Output: 0

En resumen, los Maps en JavaScript son estructuras de datos útiles para almacenar pares clave-valor y para realizar operaciones eficientes de búsqueda, adición y eliminación de valores asociados a una clave determinada.





