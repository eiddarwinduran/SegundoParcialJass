function menu(abrir) {
    var contenedor = document.getElementById('menu');
    var pri=document.getElementById('principal');
    pri.innerHTML="Nombre: Laureano Pacheco Nely"+"<br>"+"CU:35-4582 "
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
    
    const seccion = document.getElementById('seccion').value;
    const color = document.getElementById('color').value;

    
    const elemento = document.getElementById(seccion);
    if(seccion==='bu'){ 
        for(var i=1;i<=5;i++){
            const elemento = document.getElementById(seccion+i);
            
            elemento.style.backgroundColor = color;
        }
    }else
      elemento.style.backgroundColor = color;
    
}
function pregunta2(){
    var contenedor=document.getElementById('principal');
    var his=document.getElementById('historial');
    his.innerHTML='Presiono 2';
    fetch('tablas.html')
    .then(response=>response.text())
    .then(data=>contenedor.innerHTML=data);
}

function tabla(){
    
     var resul=document.getElementById('resultado')
     var principal=document.getElementById('principal')
       resul.innerHTML='' 
     var valor=document.getElementById('valor').value;
     var num=document.getElementById('num').value;
     var op=document.getElementsByName('operacion')
                                                   
     
     let operacion=''
     for (const ops of op) {
         if (ops.checked) {
          operacion = ops.value;
           break; 
       }
      }
        let tabla='<table class="tabla">' 

         for(let i=1;i<=num;i++){ 
             let color = (i % 2 === 0) ? 'background-color: white;' : 'background-color: blue; color: white;';

             tabla += `<tr style="${color}">`;
         if(operacion=='+'){  
             
                 
                tabla+= '<td>'+i+'</td>'+'<td>'+operacion+'</td>'+'<td>'+valor+'</td><td>=</td>'+'<td>'+(i+parseInt(valor))+'</td>'
                 principal.style.height='auto'
                resul.style.height="auto"
              
         }
         else if(operacion=='-'){
             tabla+= '<td>'+i+'</td>'+'<td>'+operacion+'</td>'+'<td>'+valor+'</td><td>=</td>'+'<td>'+(i-parseInt(valor))+'</td>'
              principal.style.height='auto'
              resul.style.height="auto"
         }
         else if(operacion=='*'){
             tabla+= '<td>'+i+'</td>'+'<td>'+operacion+'</td>'+'<td>'+valor+'</td><td>=</td>'+'<td>'+(i*parseInt(valor))+'</td>'
              resul.style.height="auto"
              principal.style.height='auto'
         }
         else{
             tabla+= '<td>'+i+'</td>'+'<td>'+operacion+'</td>'+'<td>'+valor+'</td><td>=</td>'+'<td>'+(i/parseInt(valor))+'</td>'
              resul.style.height="auto"
              principal.style.height='auto'
         }
         tabla+='</td>'
     } 
                     
                             
     tabla+='</table>' 
    resul.innerHTML=tabla
 }

 function imagen(id) {
    
    var contenedor=document.getElementById('principal')
    var ajax = new XMLHttpRequest();
    ajax.open("get", 'pregunta3.php?id='+id, true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            contenedor.innerHTML = ajax.responseText;
        }
    }
    ajax.send();
}