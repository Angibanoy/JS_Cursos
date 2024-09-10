//Do while siempre se ejecuta porque la condición while está al final

/* let valor;
do {
    valor=parseInt(prompt('Ingrese valor 1 para salir...'));
    document.write('Ingrese valor: ',valor);
    document.write('<br>')
} while (valor != 1); */


let usuario,clave, control;

constrol=0;
usuario=prompt('Ingrese usuario');
clave=prompt('Ingrese su contraseña');

do {
    if(clave!='Anmaromi2845'){
        clave=prompt('Contraseña incorrecta\n'+
        'Intente de nuevo');
        control=0;
    }else{
        control=1;
    }
} while (control!=1);
document.write('Acceso Correcto');