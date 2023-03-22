import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import CategoryP from './components/Categories/categoryP'
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetail from './components/itemDetail/itemDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/categoryP",
    element: <CategoryP />,
  },
  {
    path: "/categoryP/:id",
    element: <ItemListContainer />,
  },
  {
    path: "/checkout",
    element: <div>Hello world!</div>,
  },
  {
    path: "/itemDetail/:id",
    element: <ItemDetail />,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
