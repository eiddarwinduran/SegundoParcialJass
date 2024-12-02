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