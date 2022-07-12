<?php
require_once dirname(dirname(dirname(__FILE__))).'/Classes/Database/Database.php';

header('Access-Control-Allow-Origin: https://scandiweb5604frondend.herokuapp.com');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: GET');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $db = new Database();
    echo json_encode($db->getProducts());
}