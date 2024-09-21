import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./Components/Home.jsx";
import {About} from "./Components/About.jsx";
import {Project} from "./Components/Project.jsx";
import {Skills} from "./Components/Skills.jsx";

const router = createBrowserRouter([{
    path:'/',
    element:<App/>,
    children:[
        {
        path:"",
        element:<Home/>
    },
        {
        path:"about",
        element:<About/>
    },
         {
        path:"projects",
        element:<Project/>
    },
         {
        path:"Skills",
        element:<Skills/>
    },
    ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
