import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import App from './App'
import "./index.css"
import "./styles/GlobalStyles.css"
import { router } from './routes/Router';



createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
)
