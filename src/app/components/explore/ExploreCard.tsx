import React from "react";
import Image from "next/image";

interface ExploreCardProps {
  img: string;
  location: string;
  distance: string;
}

export default async function ExploreCard({
  img,
  location,
  distance,
}: ExploreCardProps) {
  return (
    <div className="flex p-3 items-center m-2 mt-5 space-x-3 cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative w-32 h-32">
        <Image className="rounded-sm" fill src={img} alt="explorer card" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}
