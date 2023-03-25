<?php
header ('Access-Control-Allow-Origin: *');
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require("../conexion.php");

$del = "DELETE from usuario WHERE ID_Usuario=".$_GET['id'];
mysqli_query($conexion,$del) or die ("No eliminó");


class Result {}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje ='Usuario borrado';

header('Content-Type: application/json');
echo json_encode($response);

?>