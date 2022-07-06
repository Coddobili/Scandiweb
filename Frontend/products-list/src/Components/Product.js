function Product(props) {
    return (
      <div id={'product'}>
          <input type={'checkbox'}/>
          <p>{props.id}</p>
          <p>{props.sku}</p>
          <p>{props.name}</p>
          <p>{props.price}</p>
          <p>{props.about}</p>
      </div>
    );
}

export default Product;