function Header() {
    return (
        <header>
            <h1 id={'heading'}>Product List</h1>
            <div id={'buttons'}>
                <button type={'button'} id={'add'}>ADD</button>
                <button type={'button'} id={'mass-delete'}>MASS DELETE</button>
            </div>
        </header>
    );
}

export default Header;