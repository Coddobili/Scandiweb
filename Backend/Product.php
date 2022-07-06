<?php
require_once 'Database.php';

abstract class Product
{
    private ?string $sku;
    private ?string $name;
    private ?string $price;
    private ?Database $db;

    public function __construct(?string $sku, ?string $name, ?string $price)
    {
        $this->sku = $sku;
        $this->name = $name;
        $this->price = $price.'$';
        $this->db = new Database();
    }

    public function getSku(): ?string
    {
        return $this->sku;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function getDb(): ?Database
    {
        return $this->db;
    }

    abstract function getAbout(): ?string;
}