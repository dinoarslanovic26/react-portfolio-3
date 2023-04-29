import React, { useState, useEffect } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Navbar from './Navbar';
import Footer from './Footer';

const pages = {
  About,
  Projects,
  Contact
};

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('About');

  const handlePageChange = (page) => setCurrentPage(page === "Projects" ? "Portfolio" : page);

  useEffect(() => {
    document.title = `Portfolio | ${currentPage}`;
  }, [currentPage]);

  const PageComponent = pages[currentPage];

  return (
    <>
      <div>
        <div className="header">
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
        {currentPage !== 'Portfolio' && <PageComponent />}
        {currentPage === 'Portfolio' && <Projects />}
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;