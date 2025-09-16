// External libraries
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router";

// Main Routing component
import router from './index.router.jsx';

// Styles
import './index.css'


createRoot(document.getElementById('root')).render(
 /*
 Enlever les doublons dans la console
 <StrictMode>*/
      <RouterProvider router={router} />
  //</StrictMode>,
)
