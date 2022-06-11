//! 9-2xx
import React, { useState } from 'react';
import NavigationPage from './NavigationPage';
import Home from './pages/MyHomePage';
import About from './pages/AboutMe';
//import Blog from './pages/Blog';
import Contact from './pages/ContactMe';
import Header from './Header';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'NavigationPage') {
      return <NavigationPage />;
    }
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    // if (currentPage === 'Blog') {
    //   return <Blog />;
    // }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header  />
      {/* We are passing the currentPage from state and the function to update it */}
      <NavigationPage currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <Footer />
      {renderPage()}
    </div>
  );
}
