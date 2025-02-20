// import React from 'react';

function Post() {
  return (
    <div className="Post flex-grow p-4 bg-white shadow-md rounded-lg mt-0 mr-[25opx] mb-[40px]">
      {/* Post Image */}
      <img
        className="postImg w-full h-[280px] object-cover rounded-lg hover:scale-105 transition-all"
        src="https://scontent.fccu18-1.fna.fbcdn.net/v/t39.30808-6/471149131_122142560348372430_6705594367765603224_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=boI2zcc0U-8Q7kNvgG_-_XM&_nc_oc=AdjyT_jV5plluAyJbA0YixpqDMjgoXCFfR4IktKWZxBuPW3kxBm61EPpkxvaq7aqEu8&_nc_zt=23&_nc_ht=scontent.fccu18-1.fna&_nc_gid=A659FCXpoPwm5-tRfyw72pl&oh=00_AYB1yJxpvOvXqUAjFhyqSq_W0YGqwvVLAiTQmpe6R_Hnlw&oe=67BCC3B7"
        alt="Post"
      />

      {/* Post Info */}
      <div className="postInfo mt-4 flex flex-col items-center ">
        {/* Categories */}
        <div className="postCats flex gap-3 text-sm text-gray-500">
          <span className="postCat bg-gray-200 px-3 py-1 rounded-full">
            Music
          </span>
          <span className="postCat bg-gray-200 px-3 py-1 rounded-full">
            Life
          </span>
        </div>

        {/* Post Title */}
        <span className="postTitle block mt-2 text-lg md:text-xl font-semibold text-gray-700 cursor-pointer hover:text-blue-500 transition-all">
          Lorem ipsum dolor sit amet.
        </span>

        {/* Divider */}
        <hr className="border-b border-gray-300 my-2" />

        {/* Post Date */}
        <span className="postDate text-sm text-gray-500 italic">
          1 hour ago
        </span>
      </div>
      <p className="postDesc mt-[15px] text-gray-600 text-[14px] leading-relaxed color-[#444] text-base/4 text-ellipsis overflow-hidden display-webkit-box display-webkit-line-clamp-4 display-webkit-box-orient-vertical">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
        distinctio? Veritatis, saepe recusandae! Impedit ullam perferendis qui
        fugit? Maiores vitae voluptatum deleniti expedita tempora sequi et ut
        autem reiciendis eius iusto quis repellat, rem odio optio cupiditate
        placeat, atque ea perferendis a suscipit tenetur eaque sunt fugit? Nobis
        reiciendis officiis eius molestias neque, esse, corrupti nisi totam ab
        dolorum deleniti. Eos quaerat magnam reiciendis iste aperiam recusandae
        a assumenda earum velit, sit nisi tenetur itaque saepe suscipit
        exercitationem dolore molestias maxime! Necessitatibus ducimus quibusdam
        sunt dicta praesentium sint, quisquam cum nihil repudiandae laudantium
        dolores culpa. Dicta similique blanditiis in sit consequuntur mollitia
        earum facere. Dolores assumenda dolorem totam, harum numquam saepe cum
        voluptatum culpa magni rerum ratione eos et dignissimos doloribus id
        tenetur natus perspiciatis. Mollitia voluptas repudiandae temporibus
        fugiat voluptate ipsum cum. Esse dicta accusamus itaque ducimus eum
        reprehenderit dolorum sequi? Atque quaerat veniam, odio nulla
        consectetur ut voluptate.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
        distinctio? Veritatis, saepe recusandae! Impedit ullam perferendis qui
        fugit? Maiores vitae voluptatum deleniti expedita tempora sequi et ut
        autem reiciendis eius iusto quis repellat, rem odio optio cupiditate
        placeat, atque ea perferendis a suscipit tenetur eaque sunt fugit? Nobis
        reiciendis officiis eius molestias neque, esse, corrupti nisi totam ab
        dolorum deleniti. Eos quaerat magnam reiciendis iste aperiam recusandae
        a assumenda earum velit, sit nisi tenetur itaque saepe suscipit
        exercitationem dolore molestias maxime! Necessitatibus ducimus quibusdam
        sunt dicta praesentium sint, quisquam cum nihil repudiandae laudantium
        dolores culpa. Dicta similique blanditiis in sit consequuntur mollitia
        earum facere. Dolores assumenda dolorem totam, harum numquam saepe cum
        voluptatum culpa magni rerum ratione eos et dignissimos doloribus id
        tenetur natus perspiciatis. Mollitia voluptas repudiandae temporibus
        fugiat voluptate ipsum cum. Esse dicta accusamus itaque ducimus eum
        reprehenderit dolorum sequi? Atque quaerat veniam, odio nulla
        consectetur ut voluptate.
      </p>
    </div>
  );
}

export default Post;
