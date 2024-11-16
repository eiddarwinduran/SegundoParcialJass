<?php
    $con=new mysqli("localhost","root","","bd_biblioteca");
    if($con->connect_error)
    die("Conexion Fallida". $con->connect_error);
?>