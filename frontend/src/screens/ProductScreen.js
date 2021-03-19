import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetials = useSelector((state) => state.getProductDetails);
  console.log(productDetials);
  const { loading, error, product } = productDetials;

  useEffect(() => {
    console.log(match.params.id);
    console.log(product);
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
    
  }, [dispatch, product, match]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };


  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen_left">
            <div className="left_image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left_info">
              <p className="left_name">{product.name}</p>
              <p className="left_price">Prrice: ${product.price}</p>
              <p className="left_description">{product.description}</p>
            </div>
          </div>

          <div className="productscreen_right">
            <div className="right_info">
              <p>
                <span>Price: ${product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;