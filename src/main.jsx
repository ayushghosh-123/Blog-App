import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from '../Layout'
import Home from './Pages/Home/Home'
import Post from './Component/Post/Post'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import Write from './Pages/Write/Write'
import Setting from './Pages/Settings/settings'
import Single from './Pages/Single/single'
// import App from './App.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="/Home" element ={<Home/>}/>
      <Route path="/Posts" element ={<Post/>}/>
      <Route path="/Register" element ={<Register/>}/>
      <Route path="/Login" element ={<Login/>}/>
      <Route path="/write" element ={<Write/>}/>
      <Route path="/Setting" element ={<Setting/>}/>
      <Route path="/Posts/:postId" element ={<Single/>}/>
    </Route>

  )
) 
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
