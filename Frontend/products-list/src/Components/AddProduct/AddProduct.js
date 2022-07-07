import {useState, useEffect} from 'react'; 
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';

function AddProduct() {
    const navigate = useNavigate();
    const [type, setType] = useState('switcher');
    const [flag, setFlag] = useState(false);
    const [flag1, setFlag1] = useState(false); 

    const handleTypeChange = (e) => {
        setType(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFlag1(false);
        let flag1 = false;
        setFlag(type === 'switcher');

        
        const allInputs = Array.from($('input'));
        const numberInputs = allInputs.slice(2);

        for (const input of allInputs) {
            if (input.value === '') {
                setFlag(true);
                flag1 = true;
                break;
            }
        }

        for (const input of numberInputs) {
            const number = Number(input.value);
            if (isNaN(number) || number <= 0) {
                $(`#${input.id}`).next().show();
                setFlag(true);
                flag1 = true;
            } else {
                $(`#${input.id}`).next().hide();
            }
        }

        if (!flag1) {
            const details = {};
            for (const input of allInputs) {
                details[input.id] = input.value;
            }
            axios.post(`http://localhost:8080/add${type}.php`, details)
                .then(function (response) {
                    if (response.data) {
                        navigate('/');
                    } else {
                        setFlag1(true);
                    }
                });
        }
    }

    useEffect(() => {
        $(document).attr('title', 'Product Add');
    }, []);

    const [switcher] = useState({
        'switcher': <></>,
        'dvd': <>
            <label>
                   Size (MB) <input type={'text'} id={'size'} />
                   <h6  style={{display: 'none'}}>Please, provide the data of indicated type</h6>
            </label>
            <p>Please, provide size</p>
            </>,
        'furniture': <>
            <label>
                Height (CM) <input type={'text'} id={'height'} />
                <h6 style={{display: 'none'}}>Please, provide the data of indicated type</h6>
            </label>
            <label>
                Width (CM) <input type={'text'} id={'width' } />
                <h6 style={{display: 'none'}}>Please, provide the data of indicated type</h6>
            </label>
            <label>
                Length (CM) <input type={'text'} id={'length'} />
                <h6 style={{display: 'none'}}>Please, provide the data of indicated type</h6>
            </label>
            <p>Please, provide dimensions</p>
            </>,
        'book': <>
            <label>
                Weight (KG) <input type={'text'} id={'weight'} />
                <h6 style={{display: 'none'}}>Please, provide the data of indicated type</h6>
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
                    <input type={'text'} id={'price'} />
                    <h6 style={{display: 'none'}}>Please, provide the data of indicated type</h6>
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
                {flag1 && <h3 style={{color: 'red'}}>Choose different sku</h3>}
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