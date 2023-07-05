<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');

$params = json_decode($json);

require("../conexion.php");

$editar= "UPDATE producto SET nombre_producto='$params->nombre_producto',stock_producto= '$params->stock_producto', valor_producto= '$params->valor_producto', link_producto= '$params->link_producto'  WHERE id_producto= $params->id_producto";

mysqli_query($conexion, $editar) or die ('No editó');

class result {}

$response = new Result ();
$response->resultado = 'Ok';
$response->mensaje = 'Datos modificados';

header('Content-Type: application/json');
echo json_encode($response);

?>
