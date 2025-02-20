// import React from 'react'
import Header from "../../Component/Header/header"
import Posts from "../../Component/Posts/Post"
import Sidebar from "../../Component/sidebar/Sidebar"

function Home() {
  return (
    <div className="Home ">
        <Header/>
        <div className="homeContainer flex">
            <Posts/>
            <Sidebar/>
        </div>
    </div>
  )
}

export default Home