import React from "react";

const Content = () => {
  return (
    <section>
      <div>
        <img src="/images/mobile/image-transform.jpg" alt="" />
        <div className="text-center">
          <h1 className="text-3xl font-bold main-heading px-4 mt-7">
            Transform your brand
          </h1>
          <p className="px-6 mt-5 text-[#898794]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, atque
            ut beatae porro fugiat et cumque quam repellat ipsa. Rerum repellat
            nostrum. Lorem, ipsum dolor.
          </p>
          <h1 className=" font-bold main-heading text-1xl mt-6 border-b-8 border-[#FDF1B5] rounded-sm w-[130px] mx-auto">
            LEARN MORE
          </h1>
        </div>
      </div>

      <div className="mt-12">
        <img src="/images/mobile/image-stand-out.jpg" alt="" />
        <div className="text-center">
          <h1 className="text-3xl font-bold main-heading px-4 mt-7">
            Stand out to the right audience
          </h1>
          <p className="px-6 mt-5 text-[#898794]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, atque
            ut beatae porro fugiat et cumque quam repellat ipsa. Rerum repellat
            nostrum. Lorem, ipsum dolor.
          </p>
          <h1 className=" font-bold main-heading text-1xl mt-6 border-b-8 border-[#FFDDD4] rounded-sm w-[130px] mx-auto">
            LEARN MORE
          </h1>
        </div>
      </div>
      <div className="relative mt-12">
        <img src="/images/mobile/image-graphic-design.jpg" alt="" />
        <div className="text-center absolute bottom-[80px]">
          <h1 className="text-3xl font-bold text-[#1F5447] main-heading px-4 mt-7">
            Graphic Design
          </h1>
          <p className="px-6 mt-5 text-[#1E584A] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, atque
            ut beatae porro fugiat et cumque quam repellat ipsa. Rerum repellat
            nostrum. Lorem, ipsum dolor.
          </p>
        </div>
      </div>
      <div className="relative ">
        <img src="/images/mobile/image-photography.jpg" alt="" />
        <div className="text-center absolute bottom-[80px]">
          <h1 className="text-3xl font-bold text-[#1F5447] main-heading px-4 mt-7">
            Photography
          </h1>
          <p className="px-6 mt-5 text-[#1E584A] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, atque
            ut beatae porro fugiat et cumque quam repellat ipsa. Rerum repellat
            nostrum. Lorem, ipsum dolor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
