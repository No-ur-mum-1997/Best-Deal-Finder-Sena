<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');

$params = json_decode($json);

require("../conexion.php");

$editar= "UPDATE productos SET Nombre='$params->Nombre',Cantidad= '$params->Cantidad', Valor_Venta= '$params->Valor_Venta' WHERE ID_Codigo-Productos= $params-> ID_Codigo-Productos";

mysqli_query($conexion, $editar) or die ('No editó');

class result {}

$response = new Result ();
$response -> resultado = 'Ok';
$response -> mensaje = 'Datos modificados';

header('Content-Type: application/json');
echo json_encode($response);

?>