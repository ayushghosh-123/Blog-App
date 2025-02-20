// import React from 'react';

function Sidebar() {
    return (
      <div className="Sidebar w-full md:w-[300px] p-6 bg-white shadow-lg rounded-xl flex flex-col items-center">
        
        {/* ABOUT ME SECTION */}
        <div className="Sidebar-items w-full flex flex-col items-center">
          <span className="Sidebar-title w-full text-lg font-semibold border-t-2 border-b-2 border-gray-300 py-2 text-center uppercase">
            About Me
          </span>
          <img
            src="https://scontent.fccu18-1.fna.fbcdn.net/v/t39.30808-6/476087154_122149184276372430_3828205616236561447_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WG9UgqyrFiwQ7kNvgGC11XM&_nc_oc=Adg5hHdv2yQx9QLKlwhoJaGIJNiz1Un4DxqiM8Srq3Q_KCCZde-dIkoAVaNVQ9elawU&_nc_zt=23&_nc_ht=scontent.fccu18-1.fna&_nc_gid=AWD652yifbdKEhZnF9TBtTJ&oh=00_AYALp3Xx1yZZOYLnMRmznvuoOHga5lznIcZMauR3rkNl7w&oe=67BCC4A1"
            alt="Profile"
            className="w-[80%] h-[180px] rounded-lg object-cover mt-4 shadow-md"
          />
          <p className="text-center text-gray-600 mt-3 text-sm leading-relaxed px-3">
            Passionate about technology and innovation. Sharing ideas and insights 
            to inspire and create impactful solutions.
          </p>
        </div>
  
        {/* CATEGORIES SECTION */}
        <div className="sidebarItem w-full flex flex-col items-center mt-6">
          <span className="Sidebar-title w-full text-lg font-semibold border-t-2 border-b-2 border-gray-300 py-2 text-center uppercase">
            Categories
          </span>
          <ul className="sidebarList w-full flex flex-col items-center mt-3 space-y-2">
            {["Life", "Music", "Style", "Sport", "Tech"].map((category, index) => (
              <li 
                key={index} 
                className="sidebarListItem w-[80%] text-center py-2 text-gray-700 font-medium rounded-md cursor-pointer transition-all 
                hover:bg-blue-500 hover:text-white"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
  
        {/* FOLLOW US SECTION */}
        <div className="sidebarItem w-full flex flex-col items-center mt-6">
          <span className="Sidebar-title w-full text-lg font-semibold border-t-2 border-b-2 border-gray-300 py-2 text-center uppercase">
            Follow Us
          </span>
          <div className="sidebarSocial flex gap-6 mt-4">
            <i className="fa-brands fa-facebook text-blue-600 text-2xl cursor-pointer transition-transform hover:scale-110"></i>
            <i className="fa-brands fa-twitter text-blue-400 text-2xl cursor-pointer transition-transform hover:scale-110"></i>
            <i className="fa-brands fa-pinterest text-red-500 text-2xl cursor-pointer transition-transform hover:scale-110"></i>
            <i className="fa-brands fa-instagram text-pink-600 text-2xl cursor-pointer transition-transform hover:scale-110"></i>
          </div>
        </div>
      </div>
    );
  }
  
  export default Sidebar;
  