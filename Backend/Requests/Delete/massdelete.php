<?php
require_once dirname(dirname(dirname(__FILE__))).'/Classes/Database/Database.php';

header('Access-Control-Allow-Origin: https://scandiweb5604frondend.herokuapp.com');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $db = new Database();
    $db->deleteByIds(json_decode(file_get_contents("php://input"), true));
}