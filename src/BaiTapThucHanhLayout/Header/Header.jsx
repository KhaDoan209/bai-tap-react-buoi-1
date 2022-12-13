import React from 'react';

const Header = () => {
   return (
      <div>
         <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container'>
               <a
                  className='navbar-brand'
                  href='#'
               >
                  Start Bootstrap
               </a>
               <button
                  className='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarNavAltMarkup'
                  aria-controls='navbarNavAltMarkup'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
               >
                  <span className='navbar-toggler-icon' />
               </button>
               <div
                  className='collapse navbar-collapse flex-grow-0'
                  id='navbarNavAltMarkup'
               >
                  <div className='navbar-nav'>
                     <a
                        className='nav-link active'
                        aria-current='page'
                        href='#'
                     >
                        Home
                     </a>
                     <a
                        className='nav-link'
                        href='#'
                     >
                        About
                     </a>
                     <a
                        className='nav-link'
                        href='#'
                     >
                        Contact
                     </a>
                  </div>
               </div>
            </div>
         </nav>
      </div>
   );
};

export default Header;
