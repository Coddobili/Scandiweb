import {useEffect, useState} from "react";
import axios from 'axios';
import Product from "./Product";

function ProductsList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/get.php')
            .then(function (response) {
                const data = response.data;
                const products1 = data.map((product) => (
                    <Product
                        key={'key:' + product.id}
                        id={product.id}
                        sku={product.sku}
                        name={product.name}
                        price={product.price}
                        about={product.about}
                    />
                ));
                setProducts(products1);
            });
    }, []);

    return (
        <>
        {products}
        </>
    );
}

export default ProductsList;