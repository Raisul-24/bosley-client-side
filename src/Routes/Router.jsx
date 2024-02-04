import { createBrowserRouter } from "react-router-dom";
import ManiLayout from "../LayOut/ManiLayout";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
   {
     path: "/",
     element: <ManiLayout></ManiLayout>,
     errorElement: <ErrorPage></ErrorPage>,
     children:[
      {
         path: '/',
         element: <Home></Home>
      }
     ]
   },
 ]);

export default router;