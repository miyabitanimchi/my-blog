import React from "react";
import Image from "next/image";

const Author = ({ author }: any) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-white bg-opacity-80">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          src={author.photo.url}
          alt={author.name}
          width={100}
          height={100}
          className="align-middle rounded-full"
        />
      </div>
      <h3 className="text-gray my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-gray text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
