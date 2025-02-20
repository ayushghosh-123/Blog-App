// import React from "react";

function Topbar() {
  return (
    <div className="w-full h-[50px] bg-white sticky top-0 flex items-center font-poppins font-medium">
      <div className="topLeft flex-3/12 ">
        <div className="top-icon flex items-center justify-center font-[40px] margin-right-[10px] gap-8 color-[#444] cursor-pointer">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-pinterest"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
      <div className="topCent flex-6/12">
        <ul className="topList flex justify-center m-0 p-0 list-none ">
          <li className="topListItem mr-[20px] font-300 text-[18px] ">HOME</li>
          <li className="topListItem mr-[20px] font-300 text-[18px]">ABOUT</li>
          <li className="topListItem mr-[20px] font-300 text-[18px]">CONTACT</li>
          <li className="topListItem mr-[20px] font-300 text-[18px]">LOGOUT</li>
        </ul>
      </div>
      <div className="topright flex-3/12 ">
        <div className="top-right-icon flex items-center">
          <img
            className="topImg w-[40px] h-[40px] object-cover rounded-full"
            src="https://scontent.fccu18-1.fna.fbcdn.net/v/t39.30808-6/476087154_122149184276372430_3828205616236561447_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WG9UgqyrFiwQ7kNvgGC11XM&_nc_oc=Adg5hHdv2yQx9QLKlwhoJaGIJNiz1Un4DxqiM8Srq3Q_KCCZde-dIkoAVaNVQ9elawU&_nc_zt=23&_nc_ht=scontent.fccu18-1.fna&_nc_gid=AN3te4RmL62FQ-4-6VZXTlI&oh=00_AYB6xRH6X567uAvxJK7yn7A24fxsEESAOQz6A4CDueTsRA&oe=67BC8C61"
            alt=""
          />
          <i className="fa-brands fa-searchengin font-[18px] color-[#666] cursor-pointer ml-15"></i>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
