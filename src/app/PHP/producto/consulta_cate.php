<?php
header ('Access-Control-Allow-Origin: *');
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require("../conexion.php");

$con = "SELECT * FROM categoria ORDER BY nombre_categoria";
$res = mysqli_query($conexion, $con) or die ('No consultó categoria');

$vec=[];
while ($reg=mysqli_fetch_array($res))
{
    $vec[]=$reg;
}

$cad=json_encode($vec);
echo $cad;
header ('Content-Type: application/json');

?>