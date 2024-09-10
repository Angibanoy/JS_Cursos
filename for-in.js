/* let palabra='JavaScript';

for(let f in palabra){
    document.write(f,'<br>   ');
    document.write(palabra[f]);
} */

    let palabra='paralelepipedo';
    let vocal=0;

    for(let f in palabra){
        if(palabra[f]=='a' || palabra[f]=='e' || palabra[f]=='i' || palabra[f]=='o' ||  palabra[f]=='u' ){
            vocal++;
        }
    }
    document.write('Cantidad de vocales: ',vocal);