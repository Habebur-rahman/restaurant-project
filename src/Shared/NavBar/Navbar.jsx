import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar fixed z-10 bg-opacity-30 text-white bg-black   ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black bg-base-300 rounded-box w-52">
      <li><Link to="/">Home</Link></li>
      <li><a>Contact us </a></li>
      <li><a>Dashboard</a></li>
      <li><Link to="/menu">Our menu</Link></li>
      <li><Link to="/order">Order Now</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Food Restaurant</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 ">
    <li><Link to="/">Home</Link></li>
      <li><a>Contact us </a></li>
      <li><a>Dashboard</a></li>
      <li><Link to="/menu">Our menu</Link></li>
      <li><Link to="/order">Order Now</Link></li>
      
    </ul>
  </div>
  <div className="navbar-end ">
  <button className="btn uppercase">Sign out</button>
  </div>
</div>
    );
};

export default Navbar;