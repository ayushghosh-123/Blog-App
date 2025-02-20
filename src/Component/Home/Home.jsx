// import React from 'react'
import Header from "../Header/header"
import Post from "../Post/post"
import Sidebar from "../sidebar/Sidebar"

function Home() {
  return (
    <div className="Home ">
        <Header/>
        <div className="homeContainer flex">
            <Post/>
            <Sidebar/>
        </div>
    </div>
  )
}

export default Home