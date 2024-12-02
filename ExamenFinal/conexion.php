<?php
$con = new mysqli("localhost", "root", "", "bd_biblioteca_central");
if ($con->connect_error)
    die("conexion fallada" . $con->connect_error);
?>
