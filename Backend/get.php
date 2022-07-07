<?php
require_once 'Database.php';

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: ');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $db = new Database();
    echo json_encode($db->getProducts());
}