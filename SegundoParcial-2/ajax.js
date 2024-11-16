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
