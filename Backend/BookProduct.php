<?php
require_once 'Product.php';

final class BookProduct extends Product
{
    private ?string $weight;

    public function __construct(?string $sku, ?string $name, ?string $price, ?string $weight)
    {
        parent::__construct($sku, $name, $price);
        $this->weight = 'Weight: '.$weight.'KG';
    }

    public function getAbout(): ?string
    {
        return $this->weight;
    }
}