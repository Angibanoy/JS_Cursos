//Declaración de un Array
let numeros=[15,80,650,50,30,-10];
document.write('Elementos: ',numeros);
document.write('<br>');
document.write('<br>');
document.write('Primer elemento: ',numeros[0]);
document.write('<br>');
document.write('<br>');
numeros[0]=14;
document.write('Elementos: ',numeros);
document.write('<br>');
document.write('<br>');

let frutas =['manzanas','peras','naranjas','mangos'];
document.write('Frutas: ',frutas);
document.write('<br>');
document.write('<br>');


//METODOS DE LOS ARRAYS

//Ver cantidad de elementos Función length
document.write('Cantidad: ',frutas.length);
document.write('<br>');
document.write('<br>');
document.write('Cantidad: ',numeros.length);
document.write('<br>');
document.write('<br>');

//Saber último elemento 
document.write('Ultimo elemento: ',numeros[numeros.length-1]);
document.write('<br>');
document.write('<br>');

//Transformar arrrays en tipo texto Función toString
document.write('En string: ',numeros.toString());
document.write('<br>');
document.write('<br>');

//Unir tipos de Arrays Función concat
let letras=['a','b','c'];
let numeros2=[1,2,3];
document.write('Alfanumerico: ',letras.concat(numeros2));
document.write('<br>');
document.write('<br>');

//Borrar el último elemnto de un Arrays Función pop
numeros.pop();
document.write(numeros);
document.write('<br>');
document.write('<br>');

//Agregar elemento al final Función push
numeros.push(-10);
document.write(numeros);
document.write('<br>');
document.write('<br>');

//Eliminar primer elemento Función shift
numeros.shift();
document.write(numeros);
document.write('<br>');
document.write('<br>');

//Insertar elemnto al inicio Función unshift
numeros.unshift(1000);
document.write(numeros);
document.write('<br>');
document.write('<br>');

//Eliminar elementos a partir de un punto del array Función splice(numero,numero)
numeros.splice(2,3);//Desde la posición 2 debe borrar 3 valores
document.write(numeros);
document.write('<br>');
document.write('<br>');

//Como copiar un array  Función Slice
let cantidades=[100,200,500,600,800];
let copia=cantidades.slice(1,4);//Toma el rango desde la posición 1 hasta la posición anterior al la 4
document.write('Array copia: ',copia);
document.write('<br>');
document.write('<br>');

//Organizar Arrays en modo alfabetico Función sort
let objetos=['carro','botella','planeta','zorro'];
document.write(objetos.sort());
document.write('<br>');
document.write('<br>');

//Organizar los valores del array al reves Función reverse
document.write(objetos.reverse());
document.write('<br>');
document.write('<br>');

//Crear Array con valores inalterable con const
const autos=['Toyota','Chevrolet','BMW'];
document.write(autos());
document.write('<br>');
//autos=[0]='Honda';
document.write('<br>');