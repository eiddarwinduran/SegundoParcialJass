<?php session_start();
include ("conexion.php");
$n = $_POST["n"];


for ($i = 1; $i <= 3; $i++) {
    $Nombres = $_POST["n" . $i];
    $Apellido = $_POST["a" . $i];
    $cu = $_POST["c" . $i];
    $Sexo = $_POST["s" . $i];
    $carrera = $_POST["ca" . $i];
    $fotografia = null;
if (isset($_FILES['f'.$i])) {
    $archivo_original = $_FILES['f'.$i]['name'];
    $arreglo = explode(".", $archivo_original);
    $extension = $arreglo[1];
    $fotografia = uniqid() . '.' . $extension;
}
copy($_FILES['f'.$i]['tmp_name'], 'images/' . $fotografia);
    $sql = "INSERT INTO alumnos (fotografia,nombres, apellidos, cu, sexo, codigocarrera ) 
    values ('$fotografia','$Nombres', '$Apellido', '$cu', '$Sexo', '$carrera')";
    //echo print_r($sql);
    $result = $con->query($sql);
    if (!$result) {
        die("Error al insertar datos: " . $con->error);
    }
}
session_destroy();
?>
<meta http-equiv="refresh" content="2;url=Alumnos.php">