import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import Home from './pages/Home'
import Registration_Login from './pages/Registration_Login'
import Error from './pages/Error'
import './styles/main.scss'


// NOTE: The easiest way to quickly update to a v6.4 is to get the help from createRoutesFromElements so you don't need to convert your <Route> elements to route objects.
const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index={true} path="/" element={<Registration_Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="*" element={<Error />} />
  </Route>
)

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)