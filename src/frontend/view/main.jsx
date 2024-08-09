import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import InitialRegistrationPage from "./src/Initial_Registration_Page/InitialRegistrationPage.jsx";
import IndividualAccountPersonalization from './src/Individual_Account_Personalization/IndividualAccountPersonalization';
import BandPagePersonalizationPage from "./src/Band_Page_Personalization/BandPagePersonalization.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <InitialRegistrationPage />,
    children: []
  },
  {
    path: '/personalization',
    element: <IndividualAccountPersonalization />,
    children: []
  },
  {
    path: "/BandPagePersonalization",
    element: <BandPagePersonalizationPage />,
    children: []
  }
  /*
    if you want to add another page, add it in the children if the page is a part of the the some parent page, else add another entry
  */
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);