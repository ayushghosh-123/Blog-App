// import React from 'react'

function Sidebar() {
    return (
      <div className="Sidebar flex-3 m-[20px] pb-[30px] bg-[#fbfbfb] rounded-[10px] flex flex-col items-center shadow-md">
        {/* ABOUT ME SECTION */}
        <div className="Sidebar-items flex flex-col items-center">
          <span className="Sidebar-title m-[10px] p-[5px] w-[80%] border-t border-[#a7a4a4] border-b font-semibold text-[20px] font-poppins text-center">
            ABOUT ME
          </span>
          <img
            src="https://scontent.fccu18-1.fna.fbcdn.net/v/t39.30808-6/476087154_122149184276372430_3828205616236561447_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WG9UgqyrFiwQ7kNvgGC11XM&_nc_oc=Adg5hHdv2yQx9QLKlwhoJaGIJNiz1Un4DxqiM8Srq3Q_KCCZde-dIkoAVaNVQ9elawU&_nc_zt=23&_nc_ht=scontent.fccu18-1.fna&_nc_gid=AWD652yifbdKEhZnF9TBtTJ&oh=00_AYALp3Xx1yZZOYLnMRmznvuoOHga5lznIcZMauR3rkNl7w&oe=67BCC4A1"
            alt="Profile"
            className="w-[80%] h-[150px] rounded-lg object-cover mt-[15px]"
          />
          <p className="text-center text-sm text-gray-600 mt-3 p-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, illum quidem. 
            Voluptates eveniet aliquid rem sint doloremque tempora nobis? Sapiente doloremque 
            quidem officiis asperiores est?
          </p>
        </div>
  
        {/* CATEGORIES SECTION */}
        <div className="sidebarItem w-full flex flex-col items-center mt-5">
          <span className="Sidebar-title mt-[10px] p-[3px] w-[80%] border-t border-[#a7a4a4] border-b font-semibold text-[18px] font-poppins text-center">
            CATEGORIES
          </span>
          <ul className="sidebarList w-[80%] flex flex-col items-center mt-2 space-y-2 list-none">
            {["Life", "Music", "Style", "Sport", "Tech"].map((category, index) => (
              <li key={index} className="sidebarListItem text-gray-700 hover:text-blue-500 cursor-pointer">
                {category}
              </li>
            ))}
          </ul>
        </div>
  
        {/* FOLLOW US SECTION */}
        <div className="sidebarItem w-full flex flex-col items-center mt-5">
          <span className="Sidebar-title p-[3px] w-[80%] border-t border-[#a7a4a4] border-b font-semibold text-[18px] font-poppins text-center">
            FOLLOW US
          </span>
          <div className="sidebarSocial flex gap-4 mt-3">
            <i className="fa-brands fa-facebook text-blue-600 text-xl cursor-pointer"></i>
            <i className="fa-brands fa-twitter text-blue-400 text-xl cursor-pointer"></i>
            <i className="fa-brands fa-pinterest text-red-500 text-xl cursor-pointer"></i>
            <i className="fa-brands fa-instagram text-pink-600 text-xl cursor-pointer"></i>
          </div>
        </div>
      </div>
    );
  }
  
  export default Sidebar;
  