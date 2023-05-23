<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');

$params = json_decode($json);

require("../conexion.php");


$ins= "INSERT into producto (codigo_producto, nombre_producto, valor_producto, stock_producto, fo_categoria) values ('$params->codigo_producto', '$params->nombre_producto', $params->valor_producto, $params->stock_producto , $params->fo_categoria)";

mysqli_query($conexion, $ins) or die ('No inserto');

class result {}

$response = new Result ();
$response -> resultado = 'Ok';
$response -> mensaje = 'Datos grabados';

header('Content-Type: application/json');
echo json_encode($response);

?>