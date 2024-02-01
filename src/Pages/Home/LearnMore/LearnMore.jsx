import { Input } from "@material-tailwind/react";

const LearnMore = () => {
   return (
      <div className="w-full mx-auto my-4 flex items-top flex-col justify-center md:justify-between md:flex-row ">
         <div className="mt-6 md:w-1/2 p-2 md:p-0 pl-0 lg:pl-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-950">Ready to Learn More?</h2>
            <h3 className="text-sm lg:text-lg">Get a free information kit and $250 Gift Card today.</h3>
            <div className="">
               <form>
                  <div className="">
                     
                  </div>
                  <p className="text-xs mb-2">This site is protected by reCAPTCHA and the Google<a href="#" className="text-blue-500"> Privacy Policy </a>and <a href="#" className="text-blue-500">Terms of Service</a> apply.</p>
                  <p className="text-xs mb-2">By submitting this form, I authorize Bosley to contact me by phone or text utilizing automated dialing equipment, as well as by email or mail with information about appointments, products, services, news or promotions. I understand that
                     I’m not required to give consent as a condition of purchasing any property, goods, or services. I also agree to Bosley’s <a href="#" className="text-blue-500">Terms of Service</a>.</p>
                  <input type="submit" className="w-full p-2 rounded-lg bg-blue-950 text-white font-semibold text-center"
                     value="Get My Free Info Kit" />
               </form>

            </div>
         </div>
         <div className="md:w-1/2">
            <img className="w-full p-2 lg:p-16" src="https://i.ibb.co/DVNJpJv/free-info-kit-cta-image-2-1.png" alt="" />
         </div>
      </div>
   );
};

export default LearnMore;