import React from 'react';
import Navbar from '../ShareComponents/Navbar/Navbar';
import Footer from '../ShareComponents/Footer/Footer';
import { Outlet } from 'react-router-dom';

const ManiLayout = () => {
   return (
      <div className='max-w-screen-2xl mx-auto'>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer />
      </div>
   );
};

export default ManiLayout;