import Image from "next/image";
import React from "react";
interface Props {
  img: string;
  title: string;
}
export const LiveCard = ({ img, title }: Props) => {
  return (
    <div className="cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out" >
      <div className="w-80 h-80 relative"><Image src={img} alt={title} fill/></div>
   <h3  className="text-2xl my-2">{title}</h3>
    </div>
  );
};
