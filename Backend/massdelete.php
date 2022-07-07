<?php
require_once 'Database.php';

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $db = new Database();
    $db->deleteByIds(json_decode(file_get_contents("php://input"), true));
}