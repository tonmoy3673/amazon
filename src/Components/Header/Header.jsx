import logo from "../../images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header">
      <div className="flex">
        <img src={logo} className="lg:w-8 w-6" alt="img" />
        <h2 className="lg:ms-3 text-xl font-semibold text-green-500 band">
          ShopBD
        </h2>
      </div>
      <div className="flex mx-auto">
        <a
          className="me-4 text-blue-500 hover:text-orange-600 font-semibold"
          href="/shop"
        >
          Shop
        </a>
        <a
          className="me-4  text-blue-500 hover:text-orange-600 font-semibold"
          href="/oder"
        >
          Order
        </a>
        <a
          className="me-4  text-blue-500 hover:text-orange-600 font-semibold"
          href="/inventory"
        >
          Inventory
        </a>
        <a
          className="me-4  text-blue-500 hover:text-orange-600 font-semibold"
          href="/login"
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Header;
