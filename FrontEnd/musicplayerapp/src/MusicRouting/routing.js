import { Link } from "react-router-dom";


export const routing = (
  <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <Link className="navbar-brand" to="/">
     <h2> Music Player</h2>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/play">
           <h4>PlayAll{" "}</h4> 
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/search">
          <h4> Search{" "}</h4>
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/show">
          <h4>ShowAll{" "}</h4>
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/operate">
          <h4>Operate{" "}</h4>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);