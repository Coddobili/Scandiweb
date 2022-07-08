<?php
namespace Classes;

final class DVDProduct extends Product
{
    private ?string $size;

    public function __construct(?string $sku, ?string $name, ?string $price, ?string $size)
    {
        parent::__construct($sku, $name, $price);
        $this->size = 'Size: '.$size.'MB';
    }

    public function getAbout(): ?string
    {
        return $this->size;
    }
}