import React from "react";

const ImageContent = () => {
  return (
    <div className="flex flex-wrap w-full">
      <div className="w-1/2 lg:w-1/4">
        <img
          src="/images/mobile/image-gallery-sugar-cubes.jpg"
          className="w-full h-auto object-cover"
          alt="Sugar cubes"
        />
      </div>
      <div className="w-1/2 lg:w-1/4">
        <img
          src="/images/mobile/image-gallery-milkbottles.jpg"
          className="w-full h-auto object-cover"
          alt="Milk bottles"
        />
      </div>
      <div className="w-1/2 lg:w-1/4">
        <img
          src="/images/mobile/image-gallery-orange.jpg"
          className="w-full h-auto object-cover"
          alt="Orange"
        />
      </div>
      <div className="w-1/2 lg:w-1/4">
        <img
          src="/images/mobile/image-gallery-cone.jpg"
          className="w-full h-auto object-cover"
          alt="Cone"
        />
      </div>
    </div>
  );
};

export default ImageContent;