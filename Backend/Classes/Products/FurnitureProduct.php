<?php
require_once dirname(dirname(__FILE__)).'/Products/Product.php';

final class FurnitureProduct extends Product
{
    private string $dimensions;

    public function __construct(string $sku, string $name, string $price,
                                string $height, string $width, string $length)
    {
        parent::__construct($sku, $name, $price);
        $this->dimensions = 'Dimensions: '.$height.'x'.$width.'x'.$length;
    }

    public function getAbout(): string
    {
        return $this->dimensions;
    }
}