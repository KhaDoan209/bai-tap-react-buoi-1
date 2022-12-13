import React from 'react';

const Item = (props) => {
   const iconStyling = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '4rem',
      width: '4rem',
      fontSize: '2rem',
      lineHeight: '1',
   };

   return (
      <>
         <div className='col-lg-6 col-xxl-4 mb-5'>
            <div className='card bg-light border-0 h-100'>
               <div className='card-body text-center p-4 p-lg-5 pt-0 pt-lg-0'>
                  <div
                     style={iconStyling}
                     className='feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'
                  >
                     <i className={props.icon} />
                  </div>
                  <h2 className='fs-4 fw-bold'>{props.title}</h2>
                  <p className='mb-0'>{props.desc}</p>
               </div>
            </div>
         </div>
      </>
   );
};

export default Item;
