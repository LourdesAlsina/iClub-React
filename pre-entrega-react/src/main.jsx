import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import CategoryP from './components/Categories/categoryP'
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetail from './components/itemDetail/itemDetail';
import Servicios from './components/servicios/servicios';

// Firebase
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB53q78OzXrHdUUqBUluOiLztRrvdF_KBg",
  authDomain: "iclub-18b68.firebaseapp.com",
  projectId: "iclub-18b68",
  storageBucket: "iclub-18b68.appspot.com",
  messagingSenderId: "528369667427",
  appId: "1:528369667427:web:caa5369df21f81626e1756"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
  {
    path: "/servicios",
    element: <Servicios />,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
