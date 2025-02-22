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

const user = true;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="/HOME" element ={<Home/>}/>
      <Route path="/POSTS" element ={<Post/>}/>
      <Route path="/REGISTER" element ={user? <Home/> : <Register/>}/>
      <Route path="/LOGIN" element ={user? <Home/>: <Login/>}/>
      <Route path="/WRITE" element ={user?<Write/>:<Register/>}/>
      <Route path="/SETTING" element ={user? <Setting/>: <Register/>}/>
      <Route path="/POSTS/:POSTSID" element ={<Single/>}/>
    </Route>

  )
) 
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
