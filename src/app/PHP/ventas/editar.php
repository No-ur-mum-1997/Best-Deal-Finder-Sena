<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');

$params = json_decode($json);

require("../conexion.php");

$editar= "UPDATE ventas SET Fo_Codigo-producto='$params->Fo_Codigo-producto', Cantidad= '$params->Cantidad', Fo_Usuario= '$params->Fo_Usuario', Subtotal= '$params->Subtotal', Total='$params->Total' WHERE ID_Ventas= $params-> ID_Ventas";

mysqli_query($conexion, $editar) or die ('No editó');

class result {}

$response = new Result ();
$response -> resultado = 'Ok';
$response -> mensaje = 'Datos modificados';

header('Content-Type: application/json');
echo json_encode($response);

?>