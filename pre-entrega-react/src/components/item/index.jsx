function Item({product}) {
    return (
    <div>
        <p>{product.modelo}</p>
        <img src={product.imagen} />
    </div>
    )
}

export default Item;