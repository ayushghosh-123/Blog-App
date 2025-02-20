// import React from 'react'

function Header() {
  return (
    <div className="header mt-[60px]">
        <div className="headerTitles flex flex-col items-center color-[#444] font-poppins font-medium">
            <span className="headerTitlesm absolute top-[18%] text-[20px]">React & Node</span>
            <span className="headerTitlelg absolute top-[20%] text-[100px] ">Blog</span>
        </div>
        <img className="headerImg w-full h-[450px] mt-[80px] object-cover"
        src="https://static.vecteezy.com/system/resources/previews/049/855/259/non_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg" alt="" />
    </div>
  )
}
  
export default Header