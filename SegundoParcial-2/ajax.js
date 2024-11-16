function menu(abrir) {
    var contenedor = document.getElementById('menu');
    var his=document.getElementById('historial')
    his.innerHTML="Nombre: Laureano Pacheco Nely"+"<br>"+"CU: "
    var ajax = new XMLHttpRequest();
    ajax.open("get", abrir, true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            contenedor.innerHTML = ajax.responseText;
        }
    }
    ajax.send();
}
function pregunta5() { // aqui se hace una llamada por fech cuando se presiona el boton 5
	var contenedor = document.getElementById('principal');//recuperamos el id donde vamos a cargar el resultado de la llamada
    var his=document.getElementById('historial'); 
    his.innerHTML='Presiono 5' //para esto recuperamos el id de historial para poner ese mensaje
	fetch('color.html')
		.then(response => response.text())
		.then(data => contenedor.innerHTML=data); //y aqui es donde carga el resultado
}
function cambiarColor() {
    // Obtener el valor del select (sección) y del input (color)
    const seccion = document.getElementById('seccion').value;
    const color = document.getElementById('color').value;

    // Cambiar el color de fondo de la sección seleccionada
    
    const elemento = document.getElementById(seccion);// recuperamos el id de loq ue selecionamos y lo almacenamos en elemnto de color html
    if(seccion==='bu'){ //aqui pregunto si la seleccion es bu, le puse bu1 y b2 etc a los id de los botones
        for(var i=1;i<=5;i++){// si cumple entra y hace este for hasta 5 porque son 5 botones
            const elemento = document.getElementById(seccion+i);// aqui recuperamos el id de los botones con seccion+i donde i vale 1 2 y 3 hasta 5 
            //yharia bu1 y bui2.. como el id de los botones
            elemento.style.backgroundColor = color;//aqui cambia el color de los botones
        }
    }else
      elemento.style.backgroundColor = color;// aqui cambia los colores del menu historial y demas
    
}
function pregunta2(){
    var contenedor=document.getElementById('principal');
    var his=document.getElementById('historial');
    his.innerHTML='Presiono 2';
    fetch('tablas.html')
    .then(response=>response.text())
    .then(data=>contenedor.innerHTML=data);
}
//creamos la funcion tabla  quien es el que crea una tabla   donde va ir las operaciones 
function tabla(){
    // en resul hacemos referencia alo que es resultado donde vamos a cargar  la tabla de lo que pedimos
     var resul=document.getElementById('resultado')// eto es dom
     
       resul.innerHTML='' // para limpiar  el elemento html
     var valor=document.getElementById('valor').value;//adqirimos el valor deelemento  input  es dom y se hace lo mismo con los de abajo
     var num=document.getElementById('num').value;
     var op=document.getElementsByName('operacion')// aqui acemos atraves de name  y no del id entonse atodos los elemntos 
                                                   //que tienen en name opreacion en este caso a todos los imput de tipo radio 
     
     let operacion=''// aqui creamos una varioable  vacia
     for (const ops of op) {//hacemos un for donde va a guardar en ops  y rrecorrer las operaciones delos los imputs de tipo radio
         if (ops.checked) {// aqui verificamos que input de tipo radio se eligi ya sea sumar restar o multiplicar o dividir
          operacion = ops.value;// aqui a la variable que creamos  le decimos que sea igual al la operacion selecionada
           break; // rompes el ciclo for
       }
      }
        let tabla='<table class="tabla">' //aqui creamos yna variable  donde va ser igual a una etiqueta table

         for(let i=1;i<=num;i++){ //aqui hacemos un for indicando i empiez en 1 hasta que i sea menor o igual hasta donde queres que se agan las operaciones 
                //aqui creamos otra variable y preguntamos si i es par  y si es haci a la fila de la tavla e vamos a cambiar el colo
                // azul y si es  inpar  a blanco
             let color = (i % 2 === 0) ? 'background-color: white;' : 'background-color: blue; color: white;';

             tabla += `<tr style="${color}">`;// aqui ala bariable tabla que creamos le concatenamos   y le mandamos el estido  de si va ser blanco o azul
         if(operacion=='+'){  // aqui preguntamos si la operacion e igual a + y si si entonses entra  y realiza la suma
             
                 //aqui ala varible tabla lo concatenamos las etiquetas td y las operaciones  y el resultado lo que se muestra en el resultado
                tabla+= '<td>'+i+'</td>'+'<td>'+operacion+'</td>'+'<td>'+valor+'</td><td>=</td>'+'<td>'+(i+parseInt(valor))+'</td>'

             
              resul.style.height="auto"
              
         }
         else if(operacion=='-'){ //y por falso preguntamos si es resta y ase lo mismo  el resto solo que cambia la operacion
             tabla+= '<td>'+i+'</td>'+'<td>'+operacion+'</td>'+'<td>'+valor+'</td><td>=</td>'+'<td>'+(i-parseInt(valor))+'</td>'

              resul.style.height="auto"
         }
         else if(operacion=='*'){
             tabla+= '<td>'+i+'</td>'+'<td>'+operacion+'</td>'+'<td>'+valor+'</td><td>=</td>'+'<td>'+(i*parseInt(valor))+'</td>'
              resul.style.height="auto"
         }
         else{
             tabla+= '<td>'+i+'</td>'+'<td>'+operacion+'</td>'+'<td>'+valor+'</td><td>=</td>'+'<td>'+(i/parseInt(valor))+'</td>'
              resul.style.height="auto"
         }
         tabla+='</td>'
     } 
                     
                             
     tabla+='</table>' //aqui concatenamos el cierre de la tabla 
    resul.innerHTML=tabla// y esto  es donde  cargamos toda la tavla al elemento  de resultado con la tabla ya echa con la operacion que se selecciono 
 }