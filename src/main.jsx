import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './HomePageComponents/Home.jsx'
import Page404 from './ProjectComponents/Page404.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home />},
      // {path: 'calculator', element: <Calculator />},
      // {path: 'challenges', element: <Challanges />},
      // {path: 'blog', element: <Blog />},
      // {path: 'actions', element: <Actions />},
      // {path: 'shop', element: <Shop />},
      // {path: 'forum', element: <Forum />},
    ]
  },
  // {
  //   path: 'signup',
  //   element: <Signup />
  // },
  // {
  //   path: 'signin',
  //   element: <Signin />
  // },
  {
    path: '*',
    element: <Page404 />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
