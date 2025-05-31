import React, { Children } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './website/Layout';
import Home from './website/Home';
import SwiggyCorporate from './website/SwiggyCorporate';
import SignIn from './website/Component/common/SignIn';

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
    }
  ])
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
