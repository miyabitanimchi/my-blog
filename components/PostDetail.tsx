import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const PostDetail = ({ post }: any) => {
  console.log(post);
  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80  mb-6">
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          className="object-center absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
          layout="fill"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          <div className="flex items-center mb-4 lg:mb-0 w-full lg:auto mr-8">
            <Image
              src={post.author.photo.url}
              alt={post.author.name}
              className="align-middle rounded-full"
              width={30}
              height={30}
            />

            <p className="inline align-middle text-gray-700 ml-2 text-lg">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium text-gray-700 ">
            <FontAwesomeIcon icon={faCalendarDays} />
            <span className="pl-1">{format(new Date(), "M-d-yyyy")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
