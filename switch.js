/* let valor=parseInt(prompt('Ingrese valor entre 1 y 3'));

switch(valor){
    case 1:
        document.write('Ingresó uno');
        break;
    case 2:
        document.write('Ingresó dos');
        break;
    case 3:
        document.write('Ingresó tres');
        break;
    default:
        document.write('El valor ingresado no está en el rango señalado')
        break;
} */

let color=prompt('Ingrese un color: rojo/verde/azul');

switch(color){
    case 'rojo':
        document.write('Ingresó rojo');
        break;
        case 'verde':
        document.write('Ingresó verde');
        break;
        case 'azul':
        document.write('Ingresó azul');
        break;
        default:
            document.write('No ingresó ninguno de los colores señalados');
            break;
}