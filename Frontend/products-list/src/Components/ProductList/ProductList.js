import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        $(document).attr('title', 'Product List');

        axios.get('http://localhost:8080/Requests/Get/get.php')
        .then(res => {
            setProducts(res.data);
        });
    }, []);

    const handleMassDelete = () => {
        let checks = $('.delete-checkbox');
        checks = Array.from(checks).filter(check => check.checked)
        checks.forEach((e, index, array) => {
            array[index] = e.id;
        });

        axios.post('http://localhost:8080/Requests/Delete/massdelete.php', checks)
            .then(() => {
                window.location.reload(false);
            });
    }

    return (
    <>
        <header>
            <h1>Product List</h1>
            <div>
                <Link to={'/add-product'}>ADD</Link>
                <button type={'button'} id={'delete-product-btn'} onClick={handleMassDelete}>MASS DELETE</button>
            </div>
        </header>
        <hr />
        <main>
            {products.map(product => { return (
            <div key={product.id}>
                <div>
                    <input type={'checkbox'} className={'delete-checkbox'} id={product.id} />
                </div>
                <div>
                    <p>{product.sku}</p>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <p>{product.about}</p>
                </div>
            </div>
            )})}
        </main>
        <hr />
        <footer>
            <h4>Scandiweb Test assignment</h4>
        </footer>
    </>
    )
}

export default ProductList;