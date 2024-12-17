import React from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import Image from "next/image";
type Props = {
  user: {
    id: number;
    name: string;
    profession: string;
    userImage: string;
    review: string;
  };
};

const ReviewCard = ({ user }: Props) => {
  return (
    <div className="bg-white rounded-lg m-3  p-6 relative flex flex-col justify-between min-h-[350px]">
      <div>
        <FaQuoteRight className="w-8 h-8 absolute top-4  right-4 text-red-600 opacity-20" />
        <div className="mt-6 flex items-center ">
          <FaStar className="w-4 h-4 text-yellow-400" />
          <FaStar className="w-4 h-4 text-yellow-400" />
          <FaStar className="w-4 h-4 text-yellow-400" />
          <FaStar className="w-4 h-4 text-yellow-400" />
          <FaStar className="w-4 h-4 text-yellow-400" />
        </div>
        <p className="mt-6 text-base text-gray-600 font-medium">
          {user.review}
        </p>
      </div>
      <div>
        <div className="w-full h-[1.2px] bg-gray-600 opacity-10 mt-6 mb-6 "></div>
        <div className="flex items-center space-x-4 ">
          <Image
            src={user.userImage}
            alt={user.name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1 className="font-bold text-gray-800">{user.name}</h1>
          <p className="text-sm text-gray-500">{user.profession}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
