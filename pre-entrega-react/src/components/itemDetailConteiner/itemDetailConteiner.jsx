import { useEffect, useState } from 'react' 
import Products from "../../mocks/products"
import '../../style.css'

function ItemDetailConteiner({ productId }) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const selectedProduct = Products.find(item => item.id === productId);
        setProduct(selectedProduct);
    }, [productId])

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
            <div className="itemDetailContainer">
                <img src="..." alt="..." />  
                <div>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>Price: {product.price}</p>
            </div>
            </div> 
        ) 
}

export default ItemDetailConteiner;


