// import React from 'react'

function Singlepost() {
  return (
    <div className="singlePost flex-9">
      <div className="singlePostRapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePosttitle text-4xl font-bold my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <div className="singlePostEdit">
            <i className="SinglePostIcon fa-solid fa-pen-to-square"></i>
            <i className="SinglePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
      </div>
      <p>
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
