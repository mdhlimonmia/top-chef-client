import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import Blogs from "../pages/Blogs/Blogs/Blogs";
import Chefs from "../pages/Home/Chefs/Chefs";

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
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
