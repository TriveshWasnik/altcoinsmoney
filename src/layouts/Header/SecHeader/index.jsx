import { NavLink } from "react-router-dom";

const SecHeader = ({Logo , dropdownItem , MenuInfo}) => {

  return (
      <nav className="navbar navbar-expand-lg navbar-white fixed-top" id="banner">
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand" href="#"><span><img draggable="false" src={Logo} alt="logo" /></span></a>
          {/* Toggler/collapsibe Button */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          {/* Navbar links */}

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
          
              <li className="nav-item">
                <a className="nav-link" href="index-demo-2">Home</a>   
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index-demo-4">About Us</a>   
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index-demo-3">Buy</a>   
              </li>
              <li className="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {dropdownItem && dropdownItem.map((item , key) => (
                      <NavLink key={key} className="dropdown-item" to={item.path}>{item.nameLink}</NavLink>
                  ))}
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index-demo-2">Roadmap</a>   
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index-demo-2">Contact Us</a>   
              </li>
              {/* {MenuInfo && MenuInfo.map((item , key) => (
                <li className="nav-item" key={key}>
                  <a className="nav-link" href={item.path}>{item.nameLink}</a>
                </li>
              ))} */}
              <li className="lh-55px">
                <a href="https://altcoinsmoney.gitbook.io/altcoinsmoney/" 
                target="_blank" rel="" 
                className="btn login-btn ml-50">Whitepaper</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default SecHeader;