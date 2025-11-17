import Image from "next/image";
import React from "react";

const Photo = () => {
  return (
    <div className="w-full flex justify-end">
      <Image src="/login.png" alt="" width={856} height={904} />
    </div>
  );
};

export default Photo;
