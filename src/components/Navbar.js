import React from 'react';
import Header from './Header';

const Navbar = ({ currentPage, handlePageChange }) => (
  <nav className="navbar">
    <div className="header">
      <Header />
    </div>
    <ul className="nav">
      <NavItem
        page="About"
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      >
        About
      </NavItem>
      <NavItem
        page="Portfolio"
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      >
        Projects
      </NavItem>
      <NavItem
        page="Contact"
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      >
        Contact
      </NavItem>
    </ul>
  </nav>
);

const NavItem = ({ page, currentPage, handlePageChange, children }) => (
  <li className="nav-item">
    <a
      href={`#${page.toLowerCase()}`}
      className={currentPage === page ? 'nav-link active' : 'nav-link'}
      onClick={() => handlePageChange(page)}
    >
      {children}
    </a>
  </li>
);

export default Navbar;