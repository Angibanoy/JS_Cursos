//Funciones matematicas

//Redondea a al entero más cercano
var precio=Math.round(399.53);
document.write('precio redondeado: ',precio);
document.write('<br>');

//Redondea al entero más grande sin importar el valor del decimal
var precio=Math.ceil(299.4);
document.write('precio redondeado: ',precio);
document.write('<br>');

//Redondear sin importar hacia abajo sin importar el valor del decimal
var precio=Math.floor(540.9);
document.write('precio redondeado: ',precio);
document.write('<br>');

//Calcular el seno de un angulo
var seno=Math.sin(45);
document.write('el seno es: ',seno);
document.write('<br>');

//calcular exponencial de un número
var expo=Math.exp(2);
document.write('Exponencial es: ',expo);
document.write('<br>');

//Calcular el logaritmo de una función
var logaritmo=Math.log(10);
document.write('logaritmo de 10: ',logaritmo);
document.write('<br>');

//Calcular el valor absoluto de un número
var absoluto=Math.abs(-10);
document.write('Valor absoluto de -10: ',absoluto);
document.write('<br>');

//Calcular valor maximo de una secuencia
var maximo=Math.max(10,50,600,1,8);
document.write('el maximo es: ',maximo);
document.write('<br>');

//Calcular el valor minimo
var minimo=Math.min(10,50,600,1,8);
document.write('el minimo es: ',minimo);
document.write('<br>');

//Traer en pantalla un número aleatorio
var aleatorio=Math.random();
document.write('valor aleatorio: ',aleatorio);
document.write('<br>');

//Traer en pantalla un número aleatorio entero
var aleatorio=Math.round(Math.random()*20);
document.write('valor aleatorio: ',aleatorio);
document.write('<br>');

//Raiz cuadrada de un número
var valor=Math.sqrt(81);
document.write('Raiz Cuadrada: ',valor);
document.write('<br>');

//Calcular el exponente de un número
var exponente=Math.pow(4,2);
document.write('valor de 4 a la 2: ',exponente);
document.write('<br>');



