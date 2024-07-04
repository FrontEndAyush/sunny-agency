import React from "react";

const Testimonials = () => {
  return (
    <section className="py-10">
      <h1 className="main-heading text-1xl tracking-widest  text-center font-bold text-[#A8A9AB]">
        CLIENT TESTIMONIALS{" "}
      </h1>
      <div className="lg:flex w-3/4 mx-auto  lg:px-[10px] ">
        <div className="mx-auto">
          <img
            src="/images/image-emily.jpg"
            className="rounded-full w-[80px] mx-auto my-7"
            alt=""
          />
          <p className="text-center font-semibold px-6 text-[#898794]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repudiandae provident numquam, natus quasi soluta eos culpa qui
            maiores reprehenderit.
          </p>
          <h1 className="text-center mt-3 text-[18px] main-heading  font-bold">
            Emily R.
          </h1>
          <p className="text-center text-[#898794] mt-1 ">Marketing Director</p>
        </div>
        <div className="mx-auto mt-12 lg:mt-0">
          <img
            src="/images/image-jennie.jpg"
            className="rounded-full w-[80px] mx-auto my-7"
            alt=""
          />
          <p className="text-center font-semibold px-6 text-[#898794]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repudiandae provident numquam, natus quasi soluta eos culpa qui
            maiores reprehenderit.
          </p>
          <h1 className="text-center mt-3 text-[18px] main-heading  font-bold">
            Jennie
          </h1>
          <p className="text-center text-[#898794] mt-2 ">Marketing Director</p>
        </div>
        <div className="mx-auto mt-12 lg:mt-0">
          <img
            src="/images/image-thomas.jpg"
            className="rounded-full w-[80px] mx-auto my-7"
            alt=""
          />
          <p className="text-center font-semibold px-6 text-[#898794]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repudiandae provident numquam, natus quasi soluta eos culpa qui
            maiores reprehenderit.
          </p>
          <h1 className="text-center mt-3 text-[18px] main-heading  font-bold">
            Thomas
          </h1>
          <p className="text-center text-[#898794] mt-2 ">Marketing Director</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
