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