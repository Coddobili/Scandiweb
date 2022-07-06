<?php
require_once 'BookProduct.php';

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $details = json_decode(file_get_contents("php://input"));
    $book = new BookProduct($details->sku, $details->name, $details->price, $details->weight);
    $book->getDb()->addToProducts($book);
}
