<?php

function GetQRCode ($int, $string){
    // El int es el número que está vinculando el QR con el producto y el string es el nombre del producto
    mysqli_select_db ("Database", $conexion);

    $consulta = "SELECT * FROM Producto WHERE Id = "$int";";

    $comando = pg_query($conexion, $consulta);
}

function GetEsp($int){
    // El int es la ID del producto
    mysqli_select_db ("Database", $conexion);

    $consulta = "SELECT * FROM Espacio WHERE ProdID = "$int";";

    $comando = pg_query($conexion, $consulta);
}

function AddProd ($newQrCode, $nombre, $MaxEspacio){
    //El nuevo qr es el nuevo número que se genera con el QR
    //El nombre es el nombre del producto especificado por el usuario
    //El espacio máximo es el especificado por el usuario

    mysqli_select_db ("Database", $conexion);

    $consulta = "INSERT INTO Producto (NombreProd, QRCode) VALUES ("$nombre", "$newQrCode") INNER JOIN Espacio ON ;";
}


?>