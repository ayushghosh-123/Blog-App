// import React from "react";

function Topbar() {
  return (
    <div className="w-full h-[50px] bg-white sticky top-0 flex items-center font-poppins font-medium shadow-md px-6">
      {/* Left Section - Social Icons */}
      <div className="topLeft w-3/12 hidden md:flex">
        <div className="top-icon flex items-center gap-6 text-gray-700 text-xl cursor-pointer">
          <i className="fa-brands fa-facebook hover:text-blue-500 transition-all"></i>
          <i className="fa-brands fa-twitter hover:text-blue-400 transition-all"></i>
          <i className="fa-brands fa-pinterest hover:text-red-500 transition-all"></i>
          <i className="fa-brands fa-instagram hover:text-pink-500 transition-all"></i>
        </div>
      </div>

      {/* Center Section - Navigation Links */}
      <div className="topCenter w-6/12">
        <ul className="topList flex justify-center m-0 p-0 list-none space-x-6">
          {["HOME", "ABOUT", "CONTACT", "LOGOUT"].map((item, index) => (
            <li
              key={index}
              className="topListItem text-gray-700 font-light text-lg hover:text-blue-500 transition-all cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section - Profile & Search */}
      <div className="topRight w-3/12 flex justify-end items-center gap-4">
        {/* Profile Image */}
        <img
          className="topImg w-[40px] h-[40px] object-cover rounded-full border border-gray-300 shadow-sm"
          src="https://scontent.fccu18-1.fna.fbcdn.net/v/t39.30808-6/476087154_122149184276372430_3828205616236561447_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WG9UgqyrFiwQ7kNvgGC11XM&_nc_oc=Adg5hHdv2yQx9QLKlwhoJaGIJNiz1Un4DxqiM8Srq3Q_KCCZde-dIkoAVaNVQ9elawU&_nc_zt=23&_nc_ht=scontent.fccu18-1.fna&_nc_gid=AN3te4RmL62FQ-4-6VZXTlI&oh=00_AYB6xRH6X567uAvxJK7yn7A24fxsEESAOQz6A4CDueTsRA&oe=67BC8C61"
          alt="User"
        />
        {/* Search Icon */}
        <i className="fa-brands fa-searchengin text-gray-600 text-lg cursor-pointer hover:text-blue-500 transition-all"></i>
      </div>
    </div>
  );
}

export default Topbar;
