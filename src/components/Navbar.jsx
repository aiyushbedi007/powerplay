import { useEffect, useContext } from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";
// react icons
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { HiShoppingBag } from "react-icons/hi";
// contexts
import { BasketContext } from "../context/basketContext";
import { AuthContext } from "../context/authContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const {
    getBasketTotal,
    itemsCount,
    totalAmount,
    dispatch: basketDispatch,
    basket,
  } = useContext(BasketContext);
  const { authData, logout, dispatch: authDispatch } = useContext(AuthContext);

  const notify = () => toast("You are logged out!");

  useEffect(() => {
    getBasketTotal(basketDispatch);
    // eslint-disable-next-line
  }, [basket]);

  return (
    <nav className="navbar">
      <div className="navbar-top bg-secondary flex align-center">
        <div className="container w-100 flex align-center justify-end">
          {authData.isLoggedIn ? (
            <Link
              to="/account"
              className="flex mx-4 align-center justify-end text-dark mx-4"
            >
              <FaUser size={14} />
              <span className="mx-2 fs-13 text-uppercase ls-1">
                {authData.info.firstName}
              </span>
            </Link>
          ) : (
            <Link
              to="login"
              className="mx-4 login-btn flex align-center justify-end text-dark"
            >
              <FaUser size={14} />
              <span className="mx-2 fs-13 text-uppercase ls-1">Login</span>
            </Link>
          )}

          <button
            type="button"
            onClick={() => logout(authDispatch)}
            className="flex align-center justify-end text-dark"
          >
            <FiLogOut size={14} />
            <span className="mx-2 fs-13 text-uppercase ls-1" onClick={notify}>
              logout
            </span>
          </button>
        </div>
      </div>

      <div className="navbar-main bg-primary">
        <div className="container">
          <div className="navbar-main-top flex align-center justify-between">
            <Link to="/" className="navbar-brand">
              <span className="text-yellow fs-26 fw-6">PowerPlay.</span>
            </Link>

            <div className="navbar-basket text-white flex align-center">
              <Link to="/basket" className="basket-btn">
                <HiShoppingBag size={29} />
                <span className="basket-count flex align-center justify-center">
                  {authData.isLoggedIn ? itemsCount : "0"}
                </span>
              </Link>
              <div className="text-end basket-count">
                <p className="text-uppercase fs-14">my cart</p>
                <Link to="/basket" className="fw-7">
                  $ &nbsp;
                  <span className="basket-amount">
                    {authData.isLoggedIn ? totalAmount : "0"}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </nav>
  );
};

export default Navbar;
