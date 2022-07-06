import {useState, useEffect} from "react"; 
import {Link} from "react-router-dom";
import './AddProduct.css';

function AddProduct() {
    const [type, setType] = useState('DVD');
    const [switcher] = useState({
        'DVD': <>
            <label>
                   Size (MB) <input type={'text'} id={'size'} />
            </label>
            <p>Please, provide size</p>
            </>,
        'Furniture': <>
            <label>
                Height (CM) <input type={'text'} id={'height'} />
            </label>
            <label>
                Width (CM) <input type={'text'} id={'width' }/>
            </label>
            <label>
                Length (CM) <input type={'text'} id={'length'} />
            </label>
            <p>Please, provide dimensions</p>
            </>,
        'Book': <>
            <label>
                Weight (KG) <input type={'text'} id={'weight'}/>
            </label>
            <p>Please, provide weight</p>
            </>
    })

    const [details, setDetails] = useState({
        sku: '',
        name: '',
        price: '',
        size: '',
        weight: '',
        height: '',
        width: '',
        length: ''
    });

    const handleTypeChange = (e) => {
        setType(e.target.value);
    }

    useEffect(() => {
        document.title = 'Product Add';
    }, []);
    return (
        <>
        <header>
            <h1>Product Add</h1>
            <div>
                <button type="submit" form="product_form" >Save</button>
                <Link to='/' >Cancel</Link>
            </div>
        </header>
        <hr />
        <main>
            <form id="product_form">
                <label>
                    SKU <input type={'text'} id={'sku'}/>
                </label>
                <label>
                    Name <input type={'text'} id={'name'}/>
                </label>
                <label>
                    Price ($) <input type={'text'} id={'price'}/>
                </label>
                <label for="types">Choose a type:</label>
                <select onChange={handleTypeChange} id={'productType'}>
                    <option id="DVD" value={"DVD"}>DVD</option>
                    <option id="Furniture" value={"Furniture"}>Furniture</option>
                    <option id="Book" value={"Book"}>Book</option>
                </select>
                {switcher[type]}
            </form>
        </main>
        <hr />
        <footer>
            <h4>Scandiweb Test assignment</h4>
        </footer>
        </>
    );
}

export default AddProduct;