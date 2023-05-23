<?php
header ('Access-Control-Allow-Origin: *');
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require("../conexion.php");

$con = "SELECT p.*, c.nombre_categoria AS ncategoria FROM producto p INNER JOIN categoria c ON p.fo_categoria = c.id_categoria ORDER BY p.nombre_producto";
$res = mysqli_query($conexion, $con) or die ('No consultó productos');

$vec=[];
while ($reg=mysqli_fetch_array($res))
{
    $vec[]=$reg;
}

$cad=json_encode($vec);
echo $cad;
header ('Content-Type: application/json');

?>