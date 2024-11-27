const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {" "}
      <a className="navbar-brand" href="#">
        🍕 Pizzería Mamma Mía
      </a>
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <button className="btn btn-outline-light">Home</button>{" "}
        </li>
        {token ? (
          <>
            <li className="nav-item">
              <button className="btn btn-outline-success">🔓 Profile</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-danger">🔒 Logout</button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <button className="btn btn-outline-primary">🔐 Login</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-secondary">🔐 Register</button>
            </li>
          </>
        )}
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="btn btn-outline-light">
            🛒 Total: ${total.toLocaleString()}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
