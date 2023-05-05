import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import Blogs from "../pages/Blogs/Blogs/Blogs";
import Chefs from "../pages/Home/Chefs/Chefs";
import Recipes from "../pages/Home/Recipes/Recipes";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Terms from "../Shared/Terms/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'terms',
        element: <Terms></Terms>
      },
      {
        path: 'chefs',
        element: <Chefs></Chefs>
      },
      {
        path: '/recipes/:id',
        element: <Recipes></Recipes>,
        loader: () => fetch('https://top-chefs-server-mdhlimonmia.vercel.app/chefs'),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
