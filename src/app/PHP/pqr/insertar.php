<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');

$params = json_decode($json);

require("../conexion.php");

//$ins = "insert into usuario (Tipo_Usuario, Nombre, Email, Clave, Celular, Direccion, Historial, Fo_Ciudad) values('preuba', 'prueba', 'prueba', sha1 ('12345'), '123', 'invitado', 'prueba', 'prueba')";

$ins= "insert into ventas (Fo_Codigo-producto, Cantidad, Fo_Usuario	, Subtotal, Total) values ('$params->Fo_Codigo-producto', '$params->Cantidad', '$params->Fo_Usuario', '$params->Subtotal', '$params->Total')";

mysqli_query($conexion, $ins) or die ('No inserto');

class result {}

$response = new Result ();
$response -> resultado = 'Ok';
$response -> mensaje = 'Datos grabados';

header('Content-Type: application/json');
echo json_encode($response);

?>