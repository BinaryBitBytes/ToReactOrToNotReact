import './StyleNavigation.css';
import React from 'react';

// assign variable names
// object destructuring assignment to select variables from props object
function StyleNavigation({ thisPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" id="StyleNavigation">
      <div id="homePage">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
          >
            Miles Wesely Colòn
          </a>
        </li>
      </div>
      
      <div id="StyleNavigation-items">
        <li className="nav-item">
          <a
            href="#about me"
            onClick={() => handlePageChange('About Me')}
            // Check to see if the thisPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={thisPage === 'About Me' ? 'nav-link active' : 'nav-link'}
          >
            ABOUT ME
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Myprojects"
            onClick={() => handlePageChange('MyProjects')}
            // thistPage is `Blog`, and if so we use the active link class from bootstrap. Else, set to a normal nav-link
            className={thisPage === 'MyProjects' ? 'nav-link active' : 'nav-link'}
          >
            MY PROJECTS
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact me"
            onClick={() => handlePageChange('ContactMe')}
            // thisPage is `Contact`, use the active link class from bootstrap. Else,set to a normal nav-link
            className={thisPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}
          >
            CONTACT ME
          </a>
        </li>
      </div>
      
    </ul>
  );
}

export default StyleNavigation;