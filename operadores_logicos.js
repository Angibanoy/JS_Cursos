//Operador && (y) se deben cumplir las dos condiciones a y b
/*let a,b;
a=20;
b=30;
document.write(a==b);*/

/* let continente, edad;
continente=prompt('Ingrese su continente... ');
edad=prompt('Ingrese su edad...');

if(continente=='America' && edad>=18){
    document.write('Eres un adulto Amaricano')
}else{
    document.write('o no eres adulto, o no eres americano');
} */

    let dia,mes,ano;
    dia=prompt('Ingrese día...');
    mes=prompt('Ingrese el mes...');
    ano=prompt('Ingrese el año...');

    if(mes==1 || mes==2 || mes==3){
        document.write('Pertenece al primer trimestre');
    }else{
        document.write('No pertenece al primer trimestre');
    }
