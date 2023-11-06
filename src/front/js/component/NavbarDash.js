import React from 'react';

const NavbarDash = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <strong><a className="navbar-brand" href="#">KorYoku</a></strong>
        
         
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                DASHBOARD
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Goals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About us 
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDash;
