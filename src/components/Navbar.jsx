
import logo from "../IMAGES/guvi.webp";

const Navbar = () => {
  return (
    <div className="nav-items">
      <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav-item">
        
        <a class="navbar-brand" href="#">
        <div className="logo">
          <img src={logo} alt="" id="nav-logo" />
          <span><h1>
            <strong>BLOGS</strong>
          </h1></span>
        </div>
          
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/" id="navItm">
                ALL
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/fullStack"id="navItm">
                FULLSTACK DEVELOPMENT
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/dataScience"
                id="navItm"
              >
                DATA SCIENCE
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/cyberSecurity"
                id="navItm"
              >
                CYBER SECURITY
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/career" id="navItm">
                CAREER
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
