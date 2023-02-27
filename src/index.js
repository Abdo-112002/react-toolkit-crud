import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';
import PostDetails from './pages/PostDetails';

const routes = createBrowserRouter([
    {
      path : '/',
      element : <App/>,
      children : [
        {
          index : true,
          element : <Home/>
        },
        {
          path : 'post',
          element : <Home/>
        },
        {
          path : 'post/createPost',
          element : <AddPost/>
        },
        {
          path : 'post/:id/Edit',
          element : <EditPost/>
        },
        {
          path : 'post/:id',
          element : <PostDetails/>
        },
      ]
    },
    {
      path : '/login',
      element : <Home/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes}>
     <App />
  </RouterProvider>
);


