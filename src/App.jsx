import React, { Children } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './website/Layout';
import Home from './website/Home';
import SwiggyCorporate from './website/SwiggyCorporate';
import SignIn from './website/Component/common/SignIn';
import Login from './website/Component/common/Login';
import Profile from './website/Component/Profile';

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
      path: '/sign-in',
      element: <SignIn />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/profile/:id',
      element: <Profile />
    }
  ])
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
