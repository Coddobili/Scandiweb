import {useState, useEffect} from 'react'; 
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';

function AddProduct() {
    const navigate = useNavigate();
    const [type, setType] = useState('switcher');
    const [flag, setFlag] = useState(false);

    const handleTypeChange = (e) => {
        setType(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFlag(false);
        const details = {};

        const inputs = $('input');
        setFlag(Array.from(inputs).some(input => input.value === ''));
        for (const input of inputs) {
            details[input.id] = input.value;
        }

        if (type !=='switcher' && !flag) {
            axios.post(`http://localhost:8080/add${type.toLowerCase()}.php`, details);
            navigate('/');
        } else {
            setFlag(true);
        }
    }
    
    useEffect(() => {
        $(document).attr('title', 'Product Add');
    }, []);

    const [switcher] = useState({
        'switcher': <></>,
        'dvd': <>
            <label>
                   Size (MB) <input type={'number'} id={'size'} />
            </label>
            <p>Please, provide size</p>
            </>,
        'furniture': <>
            <label>
                Height (CM) <input type={'number'} id={'height'} />
            </label>
            <label>
                Width (CM) <input type={'number'} id={'width' } />
            </label>
            <label>
                Length (CM) <input type={'number'} id={'length'} />
            </label>
            <p>Please, provide dimensions</p>
            </>,
        'book': <>
            <label>
                Weight (KG) <input type={'number'} id={'weight'} />
            </label>
            <p>Please, provide weight</p>
            </>
    });

    return (
        <>
        <header>
            <h1>Product Add</h1>
            <div className='add'>
                <button type='submit' form='product_form'>Save</button>
                <Link to='/' >Cancel</Link>
            </div>
        </header>
        <hr />
        <main>
            <form id={'product_form'} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={'sku'}>SKU</label>
                    <input type={'text'} id={'sku'} />
                </div>

                <div>
                    <label htmlFor={'name'}>Name</label>
                    <input type={'text'} id={'name'} />
                </div>

                <div>
                    <label htmlFor={'price'}>Price ($)</label>
                    <input type={'number'} id={'price'} />
                </div>

                <div>
                    <label htmlFor={'productType'}>Type Switcher:</label>
                    <select id={'productType'} onChange={handleTypeChange}>
                        <option id='Switcher' value={'switcher'}>Type Switcher</option>
                        <option id='DVD' value={'dvd'}>DVD</option>
                        <option id='Furniture' value={'furniture'}>Furniture</option>
                        <option id='Book' value={'book'}>Book</option>
                    </select>
                </div>

                <div className='specific'>
                    {switcher[type]}
                </div>
                {flag && <h5>Please, submit required data</h5>}
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