import React from 'react';
import Navbar from '../ShareComponents/Navbar/Navbar';
import Footer from '../ShareComponents/Footer/Footer';
import { Outlet } from 'react-router-dom';

const ManiLayout = () => {
   return (
      <div>
         <Navbar></Navbar>
         <Outlet></Outlet>
         {/* <Footer></Footer> */}
      </div>
   );
};

export default ManiLayout;