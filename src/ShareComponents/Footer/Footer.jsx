import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { TbBrandVivaldi } from "react-icons/tb";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { IoSearchSharp } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { MdOutlineWifiCalling } from "react-icons/md";
const Footer = () => {
   return (
      <div>
         <footer className="footer p-10 bg-white text-base-content">
            <nav className="flex flex-col justify-center items-center">
               <img className="w-72 h-16"
                  src="https://i.ibb.co/x82v56V/Screenshot-2024-02-01-at-11-09-24-AM.png" alt="" srcset="" />
               <div className="border-2 border-orange-900">
                  <div className="bg-white px-8 py-2">
                     <h2 className="text-xl text-orange-700 font-extrabold">888-4UT-DOCS</h2>
                  </div>
                  <div className="bg-orange-700 px-8 py-2">
                     <h2 className="text-xl font-extrabold text-black">888-488-3627</h2>
                  </div>
               </div>
               <p className="text-center">
                  UTHealth Houston Professional Building
                  <p className="text-gray-500">
                  6410 Fannin Street <br />
                  Houston, Texas 77030
                  </p>
               </p>
            </nav>
            <nav>
               <h6 className="footer-title">Quick Links</h6>
               <div className="border-gray-100 border-y-2">

               </div>

               <div className="flex items-center gap-1">
                  <ImProfile />
                  <a className="link link-hover">New Patient Information</a>
               </div>
               <div className="flex items-center gap-1">
                  <IoSearchSharp></IoSearchSharp>
                  <a className="link link-hover">Find a Doctor</a>
               </div>
               <div className="flex items-center gap-1">
                  <FaUserDoctor></FaUserDoctor>
                  <a className="link link-hover">MyUtHealth Houston</a>
               </div>
               <div className="flex items-center gap-1">
                  <MdOutlineAccessTime></MdOutlineAccessTime>
                  <a className="link link-hover">Request an Appointment</a>
               </div>
               <div className="flex items-center gap-1">
                  <FaRegCreditCard></FaRegCreditCard>
                  <a className="link link-hover">Pay My Bills</a>
               </div>
               <div className="flex items-center gap-1">
                  <MdOutlineWifiCalling></MdOutlineWifiCalling>
                  <a className="link link-hover">Contact Us</a>
               </div>
            </nav>

            <nav>
               <h6 className="footer-title">careers</h6>
               <img className="w-48 lg:w-60 h-24 border-t-2 border-gray-100" src="https://i.ibb.co/C65qFHj/Screenshot-2024-02-01-at-10-48-02-AM.png"></img>
            </nav>
         </footer>
         <footer className="footer px-10 py-4 border-t bg-orange-800 text-white border-base-300">
            <aside className="items-center grid-flow-row">
               <p>© Copyright 2023 - The University of Texas Health Science Center at Houston (UTHealth Houston)</p>
               <nav>
                  <a className="link link-hover">Contact</a> |
                  <a className="link link-hover"> FeedBack</a> |
                  <a className="link link-hover"> Report Error</a>|
                  <a className="link link-hover"> Privacy policy</a> |
                  <a className="link link-hover"> Web File Viewing</a> |
                  <a className="link link-hover"> See Policies</a> |
                  <a className="link link-hover"> Employee Links</a>
               </nav>
            </aside>
            <nav className="md:place-self-center md:justify-self-end">
               <div className="grid grid-flow-col gap-4 text-xl">
                  <Link><FaFacebookF /></Link>
                  <Link><FaInstagram /></Link>
                  <Link><FaXTwitter /></Link>
                  <Link><FaLinkedin /></Link>
                  <Link><IoLogoYoutube /></Link>
                  <Link><TbBrandVivaldi /></Link>
                  <Link><BiSolidMessageSquareDots /></Link>
               </div>
            </nav>
         </footer>
      </div>
   );
};

export default Footer;