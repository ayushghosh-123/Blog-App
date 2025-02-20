// import React from 'react';

function Header() {
  return (
    <div className="header mt-[60px] relative w-full">
      {/* Title Section */}
      <div className="headerTitles flex flex-col items-center text-gray-700 font-poppins font-medium relative z-10">
        <span className="headerTitlesm text-lg md:text-xl text-gray-500">React & Node</span>
        <span className="headerTitlelg text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg">
          Blog
        </span>
      </div>

      {/* Background Image with Overlay */}
      <div className="relative w-full h-[450px] mt-4">
        <img
          className="headerImg w-full h-full object-cover rounded-lg shadow-lg"
          src="https://static.vecteezy.com/system/resources/previews/049/855/259/non_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg"
          alt="Blog Background"
        />
        {/* Gradient Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
      </div>
    </div>
  );
}

export default Header;
