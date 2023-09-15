import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/" className="logo">
        takebook
      </a>
      <div>
        <button className="navButton">Register</button>
        <button className="navButton">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
