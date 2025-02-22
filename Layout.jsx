// import React from 'react'

import { Outlet } from "react-router"
import Topbar from "./src/Component/Topbar/Topbar"

function Layout() {
  return (
    <>
        <Topbar />
        <Outlet />
    </>     
  )
}

export default Layout