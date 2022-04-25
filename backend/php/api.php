<?php
    header ('Access-Control-Allow-Origin: *');
    header("Content-Type: application/json");
    require 'config.php';

    $json = (object) [];
    $json->menu = (object) $abrir(
        archivo: "menu.json"
    );
    $json->inicio = (object) $abrir(
        archivo: "inicio.json"
    );
    $json->ourmenu = (object) $abrir(
        archivo: "ourmenu.json"
    );
    $json->ourkitchenExpert = (object) $abrir(
        archivo: "ourkitchenExpert.json"
    );
    $json->theysaidaboutus = (object) $abrir(
        archivo: "theysaidaboutus.json"
    );
    $json->aboutUs = (object) $abrir(
        archivo: "aboutUs.json"
    );
    
    echo json_encode($json, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);


?>