<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');

$params = json_decode($json);
$id = $_GET['id'];

require("../conexion.php");

$editar= "UPDATE usuario SET Tipo_Usuario='$params->Tipo_Usuario', Nombre='$params->Nombre',Email='$params->Email', Clave= sha1('$params->Clave'), Celular= '$params->Celular', Direccion= '$params->Direccion' WHERE ID_Usuario= $id";

mysqli_query($conexion, $editar) or die ('No editó');

class result {}

$response = new Result ();
$response -> resultado = 'Ok';
$response -> mensaje = 'Datos modificados';

header('Content-Type: application/json');
echo json_encode($response);

?>