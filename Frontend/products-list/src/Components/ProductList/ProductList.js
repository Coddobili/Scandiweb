import React from "react";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/get.php')
        .then((response) => {
            setProducts(response.data);
        }).catch((error) => {
            console.log(error);
        });

        document.title = 'Product List';
    }, []);

    const handleMassDelete = () => {
        let checkboxes = document.getElementsByClassName('delete-checkbox');
        checkboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked)
        checkboxes.forEach((e, index, array) => {
            array[index] = e.id;
        });

        axios.post('http://localhost:8080/massdelete.php', checkboxes)
            .then(() => {
                window.location.reload(false);
            }).catch((error) => {
                console.log(error);
            });;
    }

    return (
        <>
        <header>
            <h1>Product List</h1>
            <div>
                <Link to="/add-product" >ADD</Link>
                <button type={'button'} id={'delete-product-btn'} onClick={handleMassDelete}>MASS DELETE</button>
            </div>
        </header>
        <hr />
        <main>
            {products.map((product) => { return (
                <div>
                <div>
                  <input type={'checkbox'} className={'delete-checkbox'} id={product.id}/>
                </div>
                <div>
                  <p>{product.id}</p>
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