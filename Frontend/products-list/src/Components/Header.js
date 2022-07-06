function Header() {
    return (
        <header>
            <h1>Product List</h1>
            <div>
                <button type={'button'} id={'add-product-btn'}>ADD</button>
                <button type={'button'} id={'delete-product-btn'}>MASS DELETE</button>
            </div>
        </header>
    );
}

export default Header;