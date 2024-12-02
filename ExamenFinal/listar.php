<?php
include ("conexion.php");

$sql = "SELECT l.id, imagen, titulo, autor, l.anio as anio, o.editorial as editorial FROM libros l 
    LEFT JOIN editoriales o on l.ideditorial = o.id"; //aqui sacamos los datos de los libros y de editorial y comparamos el ideditorial con la tabla id de editorial
    //para que nos muestre el editorial que corresponde de cada libro imagen y demas datos se esta recuperando de libros todos los datos

$result = $con->query($sql);// en result se carga el resultado 
if ($result->num_rows > 0) {
    ?>
    <table style="border: 1px solid;border-collapse: collapse;">
        <tr>
            <th>ID</th>
            <th>Imagen</th>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Editorial</th>
            <th>Año</th>
        </tr>
        <?php
        while ($row = $result->fetch_assoc()) { //aqui recorre todos los resultados encontrados
            ?>
            <tr>
                <td><?php echo $row["id"] ?></td>
                <td><img style="border-radius: 0%;width: 50px; " src="images/<?php echo $row["imagen"]; ?>" width="50" height="50"></td> 
                <td><?php echo $row["titulo"] ?></td>  <!- aqui recupera los datos con sus respectivos nombres y ahi en imagenes lo mismo busca en la carpeta imagenes el nombre que rcupero de base de datos y lo muestra->
                <td><?php echo $row["autor"] ?></td>
                <td><?php echo $row["editorial"] ?></td>
                <td><?php echo $row["anio"] ?></td>
                
            </tr>
            <?php
        }
        ?>
    </table>
    <?php
} else {
    echo "cero resultados";
}
mysqli_close($con);
?>