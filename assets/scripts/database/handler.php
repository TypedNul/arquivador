<?php
$historias_lista = array(
    "amelie-viktor" => "",
    "haas-sid" => "",
    "indefinido" => "",
    "louie-corvo" => "",
    "ruivo-louie" => "",
    "uzou-sova" => ""
);

foreach ($historias_lista as $nome => &$valor) {
    $filePath = "json/$nome.json";

    if (file_exists($filePath)) {
        $valor = file_get_contents($filePath);
    }
}

$dataToJS = json_encode($historias_lista, JSON_FORCE_OBJECT);
header("Content-Type: application/json");

echo $dataToJS;
?>
