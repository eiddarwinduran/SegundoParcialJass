<?php
include('conexion.php');

if (isset($_GET['index'])) {
    $index = intval($_GET['index']);
} else {
    $index = 0;
}

$sql = "SELECT id, imagen FROM libros LIMIT $index, 1";
$result = $con->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    echo json_encode(['error' => 'No hay más imágenes.']);
}

mysqli_close($con);
?>
