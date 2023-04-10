import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import CategoryP from './components/Categories/categoryP'
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetail from './components/itemDetail/itemDetail';
import Servicios from './components/servicios/servicios';
import { CustomProvider } from './context/context';
import Checkout from './components/checkout/checkout';
import Register from './components/register/register';
import Contacto from './components/contacto/contacto';
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
 initializeApp(firebaseConfig);

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
    element: <Checkout />,
  },
  {
    path: "/itemDetail/:id",
    element: <ItemDetail />,
  },
  {
    path: "/servicios",
    element: <Servicios />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomProvider>
      <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>,
)
