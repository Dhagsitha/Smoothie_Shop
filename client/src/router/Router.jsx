import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home"
import Menu from "../pages/Shop/Menu";
import Main from "../layout/Main";
import Signup from "../components/Signup";
import UpdateProfile from "../pages/Dashboard/UpdateProfile";
import CartPage from "../pages/Shop/CartPage";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/menu",
          element:<Menu/>
        },
        {
            path:"/cart-page",
            element:<CartPage/>
        },
        {
          path:"/update-profile",
          element:<UpdateProfile/>
        }
      ]
    },
    {
      path:"/signup",
      element:<Signup/>
    }
  ]);

  export default router;