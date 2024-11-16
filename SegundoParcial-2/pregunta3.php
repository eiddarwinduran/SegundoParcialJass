<?php
include ('conexion.php');
$id=$_GET['id'];
$sql = "SELECT id, imagen FROM  libros  where id=$id";
$result = $con->query($sql);

 while ($libro = $result->fetch_assoc()) {
    ?>
       <div>
           <img src="images/<?php echo $libro['imagen'] ?>" alt="">
           <button  onclick="imagen(<?php echo $libro['id'] +1 ?>)"> Sigiente</button>
       </div>
    
<?php }
$result->data_seek(0);
?>