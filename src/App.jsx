import React, { Children } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WebsiteLayout from './website/Layout';
import Home from './website/Home';
import SwiggyCorporate from './website/SwiggyCorporate';
import SignIn from './website/Component/common/SignIn';
import Login from './website/Component/common/Login';
import Profile from './website/Component/Profile';
import DashboardLayout from './admin/Layout';
import Products from './admin/dashboard-components/Products';
import DashboardOverview from './admin/dashboard-components/DashboardOverview';

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <WebsiteLayout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'swiggy-corporate',
          element: <SwiggyCorporate />
        }
      ]
    },
    {
      path: "/dashboard/",
      element: <DashboardLayout />,
      children: [
        {
          path: '',
          element: <DashboardOverview />
        },
        {
          path: 'products',
          element: <Products />
        }
      ]
    },
    {
      path: '/sign-in',
      element: <SignIn />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/profile/:id?',
      element: <Profile />
    }
  ])
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
