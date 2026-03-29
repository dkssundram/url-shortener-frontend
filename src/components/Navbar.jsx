import "../styles/Navbar.css";

function Navbar() {

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="navbar">

      <a href="/" className="logo">dks.ks</a>

      <div className="nav-links">

        {!token ? (
          <>
            <a href="/login" className="nav-btn login">
              Login
            </a>

            <a href="/signup" className="nav-btn signup">
              Signup
            </a>
          </>
        ) : (
          <button className="nav-btn logout" onClick={handleLogout}>
            Logout
          </button>
        )}

      </div>
    </div>
  );
}

export default Navbar;