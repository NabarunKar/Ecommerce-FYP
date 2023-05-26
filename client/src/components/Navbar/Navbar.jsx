import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import { Button } from "@mui/material";

const Navbar = () => {
  const { user } = useAuthContext();
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  const { logout } = useLogout();

  const handleClick = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          {/* <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div> */}
          {/* <div className="item"> */}
          <span> </span>
          {/* <KeyboardArrowDownIcon /> */}
          {/* </div> */}
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            MART
          </Link>
        </div>
        <div className="right">
          <div className="item">
            {user ? (
              <Button onClick={handleClick}>Logout</Button>
            ) : (
              <Button>
                <Link to="/login">Login</Link>
              </Button>
            )}
          </div>

          <div className="icons">
            <SearchIcon />
            {user && (
              <Link to="/profile">
                <PersonOutlineOutlinedIcon />
              </Link>
            )}

            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
