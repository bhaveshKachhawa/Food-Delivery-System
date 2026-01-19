import { imgPath } from "../utils/constants";
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Header = () => {
  const cartData = useSelector((store) => store.cart.items);
  return (
    <div className="header">
      <div className="logo-container">
            <img className='logo' src={imgPath} alt='jsx-a11y/img-redundant-alt' />
      </div>

    <div className="nav-items">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About us</Link></li>
        <li><Link to="/cart">Cart ({cartData.length})</Link></li>
      </ul>
    </div>
    </div>
  );
}

export default Header;