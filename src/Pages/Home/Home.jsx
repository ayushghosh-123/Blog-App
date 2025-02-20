// import React from 'react'
import Header from "../../Component/Header/header"
import Post from "../../Component/Post/post"
import Sidebar from "../../Component/sidebar/Sidebar"

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