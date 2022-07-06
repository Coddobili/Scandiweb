function Product(props) {
    return (
      <div id={'product'}>
        <div>
          <input type={'checkbox'} className={'delete-checkbox'}/>
        </div>
        <div style={{textAlign: 'center'}}>
          <p>{props.id}</p>
          <p>{props.sku}</p>
          <p>{props.name}</p>
          <p>{props.price}</p>
          <p>{props.about}</p>
        </div>
      </div>
    );
}

export default Product;