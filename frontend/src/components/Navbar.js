import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar_logo">
      <Link to={`/`} className="cartItem_name">
      <h2>RawFeed Cat Meal Prep</h2>
      </Link>
      </div>

      <ul className="navbar_links">
      <li>
        <Link to="/signin">SignUp/Login</Link>
        </li>
      <li>
        <Link to="/researches">Researches</Link>
        </li>
        <li>
        <Link to="/comments">Comments</Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/cart" className="cart_link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo_badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        
      </ul>

      <div className="hamburger_menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;