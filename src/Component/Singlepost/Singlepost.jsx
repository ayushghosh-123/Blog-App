// import React from 'react'

function Singlepost() {
  return (
    <div className="singlePost flex-9">
      <div className="singlePostRapper p-[20px] pr-0">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg w-full h-[300px] radius-[5px] object-cover"
        />
        <h1 className="singlePosttitle text-4xl font-bold my-4 text-center m-[10px] font-['Lora',serif] text-[28px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <div className="singlePostEdit float-right text-60">
            <i className="SinglePostIcon fa-solid fa-pen-to-square ml-[20px] cursor-pointer text-blue-600 "></i>
            <i className="SinglePostIcon fa-solid fa-trash ml-[20px] cursor-pointern text-red-500"></i>
          </div>
        </h1>
        <div className="singlePostInfo nb-[20px] flex justify-between text-[16px] text-[#b39658]">
          <span className="singlePostAuthor">
            Author: <b>Safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
      </div>
      <p className="singlePostDesc text-[16px] text-[#444] leading-relaxed m-[15px] text-25">
        <span className="ml-20px text-[30px] font-bold font-['Lora',serif]">L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Perferendis a
        delectus earum minus cumque quasi molestias unde pariatur ducimus illum
        eveniet laboriosam ipsum excepturi eum quisquam vero, atque dolores
        reprehenderit voluptatibus tempore accusantium officia laudantium sit!
        Temporibus, esse, illum cum unde nulla mollitia odit ad ab quibusdam
        numquam quo id.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis a
        delectus earum minus cumque quasi molestias unde pariatur ducimus illum
        eveniet laboriosam ipsum excepturi eum quisquam vero, atque dolores
        reprehenderit voluptatibus tempore accusantium officia laudantium sit!
        Temporibus, esse, illum cum unde nulla mollitia odit ad ab quibusdam
        numquam quo id.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis a
        delectus earum minus cumque quasi molestias unde pariatur ducimus illum
        eveniet laboriosam ipsum excepturi eum quisquam vero, atque dolores
        reprehenderit voluptatibus tempore accusantium officia laudantium sit!
        Temporibus, esse, illum cum unde nulla mollitia odit ad ab quibusdam
        numquam quo id.
      </p>
    </div>
  );
}

export default Singlepost;
