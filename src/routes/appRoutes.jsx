import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import App from "../App";
import Home from "../pages/Home"
import Page404 from "../pages/Page404"
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Calculator from "../pages/Calculator";
import CreateLog from "../pages/CreateLog";
import LogDashboard from "../pages/LogDashboard";
import Profile from "../pages/Profile";
import Blog from "../pages/Blog";
import AboutUs from "../pages/aboutus";
import ActionChallenges from "../pages/ActionChallenges";
import LocalClimateAction from "../pages/LocalClimateAction";
import CommunityForum from "../pages/CommunityForum";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: 'calculator',
            element: <Calculator />,
            children: [
              { index: true, element: <LogDashboard /> },
              { path: 'add-log', element: <CreateLog /> }
            ]
          },
          {path: 'blog', element: <Blog />},
          {path: 'about' , element: < AboutUs/>},
         {path: 'challenges', element: <ActionChallenges />},
          {path: 'actions', element: <LocalClimateAction />},
          // {path: 'shop', element: <Shop />},
          {path: 'forum', element: <CommunityForum />},
        ]
      }
    ]
  },
  {
    path: 'profile', 
    element: <Profile />
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