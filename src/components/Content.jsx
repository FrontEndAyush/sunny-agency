import React from "react";

const Content = () => {
  return (
    <section>
      <div className="lg:flex flex-row-reverse pt-[]">
        <div className="w-4/4 lg:w-2/4">
          <img
            src="/images/mobile/image-transform.jpg"
            className=""
            alt=""
          />
       
        </div>

        <div className="lg:flex items-center mx-auto w-3/4 flex-col lg:w-1/4 justify-center lg:mr-[200px]">
          <div className="text-center ">
            <h1 className="text-3xl font-bold main-heading px-4 mt-7 lg:mt-0">
              Transform your brand
            </h1>
            <p className="px-6 mt-5 text-[#898794]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              atque ut beatae porro fugiat et cumque quam repellat ipsa. Rerum
              repellat nostrum. Lorem, ipsum dolor.
            </p>
            <h1 className=" font-bold main-heading text-1xl mt-6 border-b-8 border-[#FDF1B5] rounded-sm w-[130px] mx-auto">
              LEARN MORE
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-12 lg:mt-0 lg:flex items-center ">
        <div className="lg:w-2/4 ">
          <img
            src="/images/mobile/image-stand-out.jpg"
            className="lg:hidden"
            alt=""
          />
          <img
            src="/images/desktop/image-stand-out.jpg"
            className="hidden lg:block"
            alt=""
          />
        </div>

        <div className="text-center w-3/4 mx-auto lg:w-1/4 lg:text-left lg:ml-[130px] lg:flex flex-col justify-center">
          <h1 className="text-3xl font-bold main-heading px-4 mt-7">
            Stand out to the right audience
          </h1>
          <p className="px-6 mt-5 text-[#898794]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, atque
            ut beatae porro fugiat et cumque quam repellat ipsa. Rerum repellat
            nostrum. Lorem, ipsum dolor.
          </p>
          <h1 className=" font-bold main-heading lg:ml-[24px]  text-1xl mt-6 border-b-8 border-[#FFDDD4] rounded-sm w-[130px] mx-auto">
            LEARN MORE
          </h1>
        </div>
      </div>

      <div className="lg:flex">
        <div className="relative mt-12 lg:mt-0">
          <img
            src="/images/mobile/image-graphic-design.jpg"
            className="lg:hidden"
            alt=""
          />
          <img
            src="/images/desktop/image-graphic-design.jpg"
            className="hidden lg:block"
            alt=""
          />
          <div className="text-center absolute  mx-auto  bottom-[80px]">
            <h1 className="text-3xl font-bold text-[#1F5447] main-heading px-4 mt-7">
              Graphic Design
            </h1>
            <p className="px-6 mt-5 text-[#1E584A] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              atque ut beatae porro fugiat et cumque quam repellat ipsa. Rerum
              repellat nostrum. Lorem, ipsum dolor.
            </p>
          </div>
        </div>
        <div className="relative ">
          <img
            src="/images/mobile/image-photography.jpg"
            className="lg:hidden"
            alt=""
          />
          <img
            src="/images/desktop/image-photography.jpg"
            className="hidden lg:block"
            alt=""
          />
          <div className="text-center absolute bottom-[80px]">
            <h1 className="text-3xl font-bold text-[#1F5447] main-heading px-4 mt-7">
              Photography
            </h1>
            <p className="px-6 mt-5 text-[#1E584A] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              atque ut beatae porro fugiat et cumque quam repellat ipsa. Rerum
              repellat nostrum. Lorem, ipsum dolor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
