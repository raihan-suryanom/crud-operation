import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="px-10 py-4 border-b-2 border-primary">
      <ul className="flex justify-center items-center space-x-10 text-primary font-bold text-2xl">
        <Link to="/add">Add Data</Link>
        <Link to="/">
          <img src="/favicon.ico" alt="Rey's Logo" />
        </Link>
        <Link to="/edit">Edit Data</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
