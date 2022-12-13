import React from 'react';
import Banner from './Banner/Banner';
import Item from './Item/Item';

const Body = () => {
   const itemList = [
      {
         icon: 'bi bi-collection',
         title: 'Fresh new layout',
         desc: "With Bootstrap 5, we've created a fresh new layout for this template!",
      },
      {
         icon: 'bi bi-cloud-download',
         title: 'Free to download',
         desc: 'As always, Start Bootstrap has a powerful collectin of free templates.',
      },
      {
         icon: 'bi bi-card-heading',
         title: 'Jumbotron hero header',
         desc: 'The heroic part of this template is the jumbotron hero header!',
      },
      {
         icon: 'bi bi-bootstrap',
         title: 'Feature boxes',
         desc: "We've created some custom feature boxes using Bootstrap icons!",
      },
      {
         icon: 'bi bi-code',
         title: 'Simple clean code',
         desc: 'We keep our dependencies up to date and squash bugs as they come!',
      },
      {
         icon: 'bi bi-patch-check',
         title: 'A name you trust',
         desc: 'Start Bootstrap has been the leader in free Bootstrap templates since 2013!',
      },
   ];
   const printItem = () => {
      let result = [];
      result = itemList.map((item) => {
         return (
            <Item
               icon={item.icon}
               title={item.title}
               desc={item.desc}
            />
         );
      });
      return result;
   };

   return (
      <div>
         <Banner />
         <section className='pt-4'>
            <div className='container px-lg-5'>
               <div className='row gx-lg-5'>{printItem()}</div>
            </div>
         </section>
      </div>
   );
};

export default Body;
