<?php
header ('Access-Control-Allow-Origin: *');
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require("../conexion.php");

$del = "DELETE * from ventas WHERE ID_Ventas=".$_GET('id');
mysqli_query($conexion,$del) or die ("No eliminó");


class Result {}

$response = new Result();
$response->resultado = 'Ok';
$response->mensaje ='Producto borrado';

header('Content-Type: application/json');
echo json_encode($response);

?>