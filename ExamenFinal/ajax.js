

function pregunta4() {
	var contenedor;
	contenedor = document.getElementById('principal');
	fetch('pregunta4.html')
		.then(response => response.text())
		.then(data => contenedor.innerHTML=data);
}

function calcularRaices() {
    const a = parseInt(document.getElementById('a').value);//recupera el valor de las cajas y el parceInt los convierte en un valor numerico
    const b = parseInt(document.getElementById('b').value);
    const c = parseInt(document.getElementById('c').value);
    const resultadoDiv = document.getElementById('resultado');

    // Calcular el discriminante
    const discriminante = b * b - 4 * a * c; //calculamos la discriminante
    resultadoDiv.innerHTML = ''; // Limpiar resultados anteriores

    if (discriminante > 0) { // aqui la condicionante si la discriminante es mayor a cero entra
        // Raíces reales y diferentes
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);//esto es una formula "el Math.sqrt(discriminante)calcula la raiz de la sicriminante "
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        resultadoDiv.innerHTML = `x1 = ${x1} <br> x2 = ${x2}`; // aqui esta imprimiendo el resultado 
    } else if (discriminante === 0) {
        // Raíces reales e iguales
        const x = -b / (2 * a);
        resultadoDiv.innerHTML = `x1 = ${x} <br> x2 = ${x} <br>`;
    } else { //aqui entrara cuando la discriminante sea menor a cero o sea negativo
        // Raíces complejas
        const parteReal = (-b / (2 * a)); //se calcula la parte real
        const parteImaginaria = (Math.sqrt(-discriminante) / (2 * a)); //se calcula la parte imaginaria
        resultadoDiv.innerHTML = `
            x1 = ${parteReal} + <span class="error">${parteImaginaria}i</span> <br>
            x2 = ${parteReal} - <span class="error">${parteImaginaria}i</span>
        `; //aqui imprimimos el resultado
    }
}


//declaramos un vector con los colores
const color=['#FF0000','#00FF00','#0000FF','#FFFF00','#FFA500','#800080','#FFC0CB','#A52A2A','#808080','#00FFFF','#00FF00','#4B0082','#008080','#800000','#FFD700','#C0C0C0'];
//crea una funcio para crear la patbla 
function creartabla(){
    //se llama a el ide principal donde se añadira la tabla 
    var principal = document.getElementById("principal");
    principal.innerHTML = "";
    //creamos una tabla con createElement
    var tabla = document.createElement("table");
    var cont=0;
    //hacemos un for hata llegar a 4
    for(let i=0;i<4;i++){
        //creamos  un tr que es parte de la tabla 
        var fila = document.createElement("tr");
    for(let j=0;j<4;j++){
        // creamos un td que contendra los colores 
        var celda = document.createElement("td");
        //declaramos una  variavle que optendra los valores de los colores
        const colores=color[cont];
        //le cambiamos el estilo alas tablas  
        celda.style.backgroundColor=colores
        celda.style.width='80px'
        celda.style.height='30px'
        cont=cont+1
          //creamoes el evento para recuperar el valor del color donde sea aga click
        celda.addEventListener("click", () => {
            colorSeleccionado = colores;
        });
        //se añade una nueva elemento creado 
        fila.appendChild(celda);
    }
    //lo mismo se añade el elementoque se crea
    tabla.appendChild(fila);
 }
 //se pone todo al principal 
 principal.appendChild(tabla);
}

//se crea un vector con los nombres de los id  y asuves se los recorre 
["menu", "pie", "navegacion", "login"].forEach(id => {
    // atraves de los ids se crea un evento que cuando se aga clic  cambiara el color donde isiste clic 
    document.getElementById(id).addEventListener("click", (event)=>{
        if(colorSeleccionado){
            event.target.style.backgroundColor=colorSeleccionado;
        }else{
            alert("Selecciona un color antes de cambiar el fondo")
        }
    })
});