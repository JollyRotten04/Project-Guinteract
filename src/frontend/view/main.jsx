import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import InitialRegistrationPage from "./src/Initial_Registration_Page/InitialRegistrationPage.jsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <InitialRegistrationPage />,
    children: []
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);