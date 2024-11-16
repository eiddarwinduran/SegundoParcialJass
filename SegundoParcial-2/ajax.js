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
function pregunta5() {
	var contenedor = document.getElementById('principal');
    var his=document.getElementById('historial');
    his.innerHTML='Presiono 5'
	fetch('color.html')
		.then(response => response.text())
		.then(data => contenedor.innerHTML=data);
}
function cambiarColor() {
    // Obtener el valor del select (sección) y del input (color)
    const seccion = document.getElementById('seccion').value;
    const color = document.getElementById('color').value;

    // Cambiar el color de fondo de la sección seleccionada
    
    const elemento = document.getElementById(seccion);
    if(seccion==='bu'){
        for(var i=1;i<=5;i++){
            const elemento = document.getElementById(seccion+i);
            elemento.style.backgroundColor = color;
        }
    }else
      elemento.style.backgroundColor = color;
    
}