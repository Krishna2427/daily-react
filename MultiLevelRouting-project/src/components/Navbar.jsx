import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Navbar = ({ onTabChange, isdark, ToggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link 
        className="navbar-brand bg-primary-subtle text-primary-emphasis rounded-2 px-2 py-2" 
        to={"/"}  
        style={{ fontSize: '25px' }}
      >
        Services
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <Link 
              className="nav-link" 
              id="userDropdown" 
              role="button" 
              data-bs-toggle="dropdown"
            >
              Users
            </Link>
            <div className="dropdown-menu">
              <Link 
                className="dropdown-item" 
                to="/users" 
                onClick={() => onTabChange("users")}
              >
                User List
              </Link>
              <Link 
                className="dropdown-item" 
                to="/users/new" 
                onClick={() => onTabChange("users")}
              >
                Add User
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link 
              className="nav-link" 
              id="productDropdown" 
              role="button" 
              data-bs-toggle="dropdown"
            >
              Products
            </Link>
            <div className="dropdown-menu">
              <Link 
                className="dropdown-item" 
                to="/products" 
                onClick={() => onTabChange("products")}
              >
                Product List
              </Link>
              <Link 
                className="dropdown-item" 
                to="/products/new" 
                onClick={() => onTabChange("products")}
              >
                Add Product
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
