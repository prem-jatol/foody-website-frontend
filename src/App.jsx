import React, { Children } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './website/Layout';
import Home from './website/Home';
import SwiggyCorporate from './website/SwiggyCorporate';

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
    }
  ])
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
