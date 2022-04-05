<?php
    header("Content-Type: application/json");
    define('host', (string) 'backend/');
    define('carpeta', (string) 'json/');
    $peticion = file_get_contents($_SERVER["HTTP_REFERER"].host.carpeta."menu.json");
    echo $peticion; 

?>