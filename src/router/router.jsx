import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import Blogs from "../pages/Blogs/Blogs/Blogs";
import Chefs from "../pages/Home/Chefs/Chefs";
import Recipes from "../pages/Home/Recipes/Recipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: 'chefs',
        element: <Chefs></Chefs>
      },
      {
        path: 'home/recipes/:id',
        element: <Recipes></Recipes>,
        loader: () => fetch('http://localhost:5000/chefs'),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
