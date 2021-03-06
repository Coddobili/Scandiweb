<?php
require_once dirname(dirname(dirname(__FILE__))).'/Classes/Products/DVDProduct.php';

header('Access-Control-Allow-Origin: https://scandiweb5604frondend.herokuapp.com');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $details = json_decode(file_get_contents("php://input"));
    $dvd = new DVDProduct($details->sku, $details->name, $details->price, $details->size);
    echo $dvd->getDb()->addToProducts($dvd);
}