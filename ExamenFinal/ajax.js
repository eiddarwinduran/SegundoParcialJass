function pregunta4() {
	var contenedor;
	contenedor = document.getElementById('principal');
	fetch('pregunta4.html')
		.then(response => response.text())
		.then(data => contenedor.innerHTML=data);
}

function calcularRaices() {
    const a = parseFloat(document.getElementById('a').value);//recupera el valor de las cajas
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const resultadoDiv = document.getElementById('resultado');

    // Calcular el discriminante
    const discriminante = b * b - 4 * a * c; //calculamos la discriminante
    resultadoDiv.innerHTML = ''; // Limpiar resultados anteriores

    if (discriminante > 0) { // aqui la condicionante si la discriminante es mayor a cero entra
        // Raíces reales y diferentes
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);//esto es una formula "el Math.sqrt(discriminante)calcula la raiz de la sicriminante "
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        resultadoDiv.innerHTML = `x1 = ${x1.toFixed(2)} <br> x2 = ${x2.toFixed(2)}`; // aqui esta imprimiendo el resultado 
    } else if (discriminante === 0) {
        // Raíces reales e iguales
        const x = -b / (2 * a);
        resultadoDiv.innerHTML = `x1 = ${x.toFixed(2)} <br> x2 = ${x.toFixed(2)} <br>`;
    } else {
        // Raíces complejas
        const parteReal = (-b / (2 * a)).toFixed(2);
        const parteImaginaria = (Math.sqrt(-discriminante) / (2 * a)).toFixed(2);
        resultadoDiv.innerHTML = `
            x1 = ${parteReal} + <span class="error">${parteImaginaria}i</span> <br>
            x2 = ${parteReal} - <span class="error">${parteImaginaria}i</span>
        `;
    }
}
