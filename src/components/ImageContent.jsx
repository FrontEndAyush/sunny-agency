import React from "react";

const ImageContent = () => {
  return (
    <div >
      <div className="flex mt-12">
        <img
          src="/images/mobile/image-gallery-sugar-cubes.jpg"
          className="w-6/12 h-fit"
          alt=""
        />
        <img
          src="/images/mobile/image-gallery-milkbottles.jpg"
          className="h-fit w-6/12"
          alt=""
        />
      </div>
      <div className="flex">
        <img
          src="/images/mobile/image-gallery-orange.jpg"
          className="w-6/12 h-fit"
          alt=""
        />
        <img
          src="/images/mobile/image-gallery-cone.jpg"
          className="h-fit w-6/12"
          alt=""
        />
      </div>
    </div>
  );
};

export default ImageContent;
