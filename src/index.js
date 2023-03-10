import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import rootStore from './store/rootStore';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';
import CheckParams from './UTIL/checkParams';
// import { getAllDataLoader } from './store/PostSlice';

const routes = createBrowserRouter([
    {
      path : '/',
      element : <App/>,
      children : [
        {
          index : true,
          element : <Home/>,
          // loader : getAllDataLoader('http://localhost:5000/posts'),
        },
        {
          path : 'post',
          element : <Home/>,
          // loader : getAllDataLoader('http://localhost:5000/posts'),
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
          element : <PostDetails/>,
          loader : CheckParams
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
  <Provider store={rootStore}>
    <RouterProvider router={routes}/>
  </Provider>
);


