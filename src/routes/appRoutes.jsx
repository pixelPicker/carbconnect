import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import App from "../App";
import Home from "../pages/Home"
import Page404 from "../pages/Page404"
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Calculator from "../pages/Calculator";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        element: <ProtectedRoutes />,
        children: [
          { path: 'calculator', element: <Calculator /> },
          // {path: 'challenges', element: <Challanges />},
          // {path: 'blog', element: <Blog />},
          // {path: 'actions', element: <Actions />},
          // {path: 'shop', element: <Shop />},
          // {path: 'forum', element: <Forum />},
        ]
      }
    ]
  },
  {
    path: 'signup',
    element: <Signup />
  },
  {
    path: 'signin',
    element: <Signin />
  },
  {
    path: '*',
    element: <Page404 />
  },
])

export default router;