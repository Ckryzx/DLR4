import { formatPrice } from './helpers';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Mamma Mia</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Botón Home (Siempre Visible) */}
            <li className="nav-item">
              <a className="nav-link btn btn-outline-light" href="#">🍕 Home</a>
            </li>

            {/* Mostrar Login/Register si no está autenticado */}
            {!token ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="src/LoginPage.jsx">🔐 Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">🔏 Register</a>
                </li>
              </>
            ) : (
              // Mostrar Logout si está autenticado
              <>
              <li className="nav-item">
                <a className="nav-link" href="#">🔓 Logout</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">👤 Profile</a>
            </li>
            </>
            )}

            {/* Botón Total (Siempre Visible) */}
            <li className="nav-item">
              <button className="btn btn-warning fw-bold">
              🛒 Total: ${formatPrice(total)}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
