import './Product.css'
import { Link } from 'react-router-dom';
const Product = ({imageUrl, name, price, description, productId }) => {
    return (
        <div className="product">
            <img src={imageUrl} 
            alt={name} />
            < div className="product_info">
                <p className="info_name">{name}</p>
                <p className="info_description">
                {description.substring(0,150)}...</p>
                <p className="info_price">${price}</p>
                
                <Link to={`/products/${productId}`} className="info_button">View More</Link>

            </div>
        </div>
    )
}

export default Product
