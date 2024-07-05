import React from "react";

const Content = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex flex-col-reverse lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <img
            src="/images/mobile/image-transform.jpg"
            className="w-full h-auto lg:hidden"
            alt="Transform your brand"
          />
          <img
            src="/images/desktop/image-transform.jpg"
            className="w-full h-auto hidden lg:block"
            alt="Transform your brand"
          />
        </div>

        <div className="flex items-center justify-center w-full lg:w-1/2 p-8 lg:p-16">
          <div className="text-center lg:text-left max-w-md">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Transform your brand
            </h2>
            <p className="text-gray-600 mb-8">
              We are a full-service creative agency specializing in helping brands grow fast. 
              Engage your clients through compelling visuals that do most of the marketing for you.
            </p>
            <a 
              href="#" 
              className="inline-block font-bold text-lg relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-2 after:bg-yellow-200 after:opacity-50 after:transition-all after:duration-300 hover:after:h-full hover:after:opacity-75"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <img
            src="/images/mobile/image-stand-out.jpg"
            className="w-full h-auto lg:hidden"
            alt="Stand out to the right audience"
          />
          <img
            src="/images/desktop/image-stand-out.jpg"
            className="w-full h-auto hidden lg:block"
            alt="Stand out to the right audience"
          />
        </div>

        <div className="flex items-center justify-center w-full lg:w-1/2 p-8 lg:p-16">
          <div className="text-center lg:text-left max-w-md">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Stand out to the right audience
            </h2>
            <p className="text-gray-600 mb-8">
              Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.
            </p>
            <a 
              href="#" 
              className="inline-block font-bold text-lg relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-2 after:bg-red-200 after:opacity-50 after:transition-all after:duration-300 hover:after:h-full hover:after:opacity-75"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="relative w-full lg:w-1/2">
          <img
            src="/images/mobile/image-graphic-design.jpg"
            className="w-full h-auto lg:hidden"
            alt="Graphic Design"
          />
          <img
            src="/images/desktop/image-graphic-design.jpg"
            className="w-full h-auto hidden lg:block"
            alt="Graphic Design"
          />
          <div className="absolute inset-0 flex items-end justify-center p-8 lg:p-16">
            <div className="text-center max-w-md">
              <h2 className="text-3xl lg:text-4xl font-bold text-emerald-800 mb-6">
                Graphic Design
              </h2>
              <p className="text-emerald-700">
                Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2">
          <img
            src="/images/mobile/image-photography.jpg"
            className="w-full h-auto lg:hidden"
            alt="Photography"
          />
          <img
            src="/images/desktop/image-photography.jpg"
            className="w-full h-auto hidden lg:block"
            alt="Photography"
          />
          <div className="absolute inset-0 flex items-end justify-center p-8 lg:p-16">
            <div className="text-center max-w-md">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
                Photography
              </h2>
              <p className="text-blue-800">
                Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;