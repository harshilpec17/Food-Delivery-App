import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <div className="NavWrapper flex flex-row justify-between items-center px-2 md:px-10 py-2 ">
          <div className="logo ">
            <img
              src={LOGO_URL}
              alt="logo"
              className="CompanyLogo w-[80px] p-2.5"
            />
          </div>
          <div className="md:flex md:justify-between items-center gap-28">
            <div className="NavItems">
              <ul className="flex text-[16px] md:text-[20px] justify-between px-3 md:gap-24">
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
            <div className="Buttons flex justify-between">
              <button className="btn w-36">Sign Up</button>
              <button className="btn w-36">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
