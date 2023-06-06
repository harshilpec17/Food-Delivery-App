import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <div className="NavWrapper">
          <div className="logo">
            <img src={LOGO_URL} alt="logo" className="CompanyLogo" />
          </div>
          <div className="NavItems">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/offers">Offers</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us </Link>
              </li>
            </ul>
          </div>
          <div className="Buttons">
            <button className="btn">Sign Up</button>
            <button className="btn">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
