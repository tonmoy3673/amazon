import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header py-10 px-12">
      <div>
        <Link to="/home" className="flex">
          <img src={logo} className="lg:w-8 w-6" alt="img" />
          <span className="lg:ms-3 text-xl font-semibold text-green-500 band">
            ShopBD
          </span>
        </Link>
      </div>
      <div className="flex mx-auto">
        <Link
          className="me-4 text-blue-500 hover:text-orange-600 font-semibold"
          to="/shop"
        >
          Shop
        </Link>
        <Link
          className="me-4  text-blue-500 hover:text-orange-600 font-semibold"
          to="/order"
        >
          Order
        </Link>

        <Link
          className="me-4  text-blue-500 hover:text-orange-600 font-semibold"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="me-4  text-blue-500 hover:text-orange-600 font-semibold"
          to="/register"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Header;
