import Image from "next/image";
import Link from "next/link";
import React from "react";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";

export const Headers = ({ placeholder }: { placeholder?: string }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-5">
      <div className="relative container grid grid-cols-3">
        <Link
          href={"/"}
          className="relative flex h-12 my-auto items-center justify-start"
        >
          <Image
            src="/logo.png"
            className="object-contain object-left"
            fill
            alt="logo"
          />
        </Link>
        <Searchbar placeholder={placeholder} />
        <Navbar />
      </div>
    </header>
  );
};
