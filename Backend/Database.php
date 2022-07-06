<?php
require_once 'Product.php';

final class Database
{
    public ?PDO $pdo = null;
    public static ?Database $db = null;

    public function __construct()
    {
        $this->pdo = new PDO('mysql:host=localhost;port=3306;dbname=scandiweb', 'root', '');
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        self::$db = $this;
    }

    public function getProducts(): ?array
    {
        $statement = $this->pdo->prepare('SELECT * FROM products');
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function addToProducts(Product $product): ?bool
    {
        $statement = $this->pdo->prepare('INSERT INTO products (sku, name, price, about) 
                                                VALUES (:sku, :name, :price, :about)');
        $sku = $product->getSku();
        $name = $product->getName();
        $price = $product->getPrice();
        $about = $product->getAbout();
        $statement->bindParam(':sku', $sku);
        $statement->bindParam(':name', $name);
        $statement->bindParam(':price', $price);
        $statement->bindParam(':about', $about);

        return $statement->execute();
    }

    public function deleteByIds(array $ids): ?bool
    {
        $string_of_ids = implode(',', $ids);
        $statement = $this->pdo->prepare("DELETE FROM products
                                                WHERE id IN ($string_of_ids)");

        return $statement->execute();
    }
}