import axios from "axios";
import {useState, useEffect} from "react"; 
import {Link} from "react-router-dom";

function AddProduct() {
    const [type, setType] = useState('Switcher');

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

    const handleInputChange = (e) => {
        setDetails({...details, [e.target.id]: e.target.value})
    }

    const handleTypeChange = (e) => {
        setType(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (type !== 'Switcher') {
            axios.post(`http://localhost:8080/add${type.toLowerCase()}.php`, details);
            alert(JSON.stringify(details));
        }
    }
    
    useEffect(() => {
        document.title = 'Product Add';
    }, []);

    const [switcher] = useState({
        'Switcher': <></>,
        'DVD': <>
            <label>
                   Size (MB) <input type={'text'} id={'size'} onChange={handleInputChange} />
            </label>
            <p>Please, provide size</p>
            </>,
        'Furniture': <>
            <label>
                Height (CM) <input type={'text'} id={'height'} onChange={handleInputChange} />
            </label>
            <label>
                Width (CM) <input type={'text'} id={'width' } onChange={handleInputChange}/>
            </label>
            <label>
                Length (CM) <input type={'text'} id={'length'} onChange={handleInputChange}/>
            </label>
            <p>Please, provide dimensions</p>
            </>,
        'Book': <>
            <label>
                Weight (KG) <input type={'text'} id={'weight'} onChange={handleInputChange}/>
            </label>
            <p>Please, provide weight</p>
            </>
    });

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
            <form id="product_form" onSubmit={handleSubmit}>
                <label>
                    SKU <input type={'text'} id={'sku'} onChange={handleInputChange}/>
                </label>
                <label>
                    Name <input type={'text'} id={'name'} onChange={handleInputChange}/>
                </label>
                <label>
                    Price ($) <input type={'text'} id={'price'} onChange={handleInputChange}/>
                </label>
                <label for="types">Type Switcher:</label>
                <select onChange={handleTypeChange} id={'productType'}>
                    <option id="Switcher" value={"Switcher"}>Type Switcher</option>
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