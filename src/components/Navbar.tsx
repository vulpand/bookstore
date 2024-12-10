import { Link } from 'react-router-dom';
import './../App.css';


const Navbar = () => {

  return (
    <nav className='navbar'>
      <Link to="/books">Books</Link>
      <Link to="/profile">Profile</Link>
    </nav>
)};

export default Navbar;
