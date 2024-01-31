import { createBrowserRouter } from "react-router-dom";
import ManiLayout from "../LayOut/ManiLayout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
   {
     path: "/",
     element: <ManiLayout></ManiLayout>,
     children:[
      {
         path: '/',
         element: <Home></Home>
      }
     ]
   },
 ]);

export default router;