"use client";
import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
export default function Searchbar({placeholder}:{placeholder?:string}) {
  const [search, setsearch] = useState("");
  const [numOfGuest, setNumOfGuest] = useState("1");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };

  return (
    <>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          placeholder={placeholder?placeholder:"Start Your search"}
          className="text-gray-600 outline-none placeholder-gray-400 flex-grow pl-5 bg-transparent text-sm"
        />
        <MagnifyingGlassIcon className="md:mx-2 p-2 rounded-full md:inline-block hidden h-8 w-8 text-white bg-red-500 cursor-pointer" />
      </div>
      {search && (
        <div className=" absolute translate-x-[-50%] top-[100%] left-[50%]    bg-white">
          <DateRangePicker
            minDate={new Date()}
            rangeColors={["#fa5a5f"]}
            onChange={handleSelect}
            ranges={[selectionRange]}
          />
          <div className="flex p-3  items-center border-b ">
            <h2 className="text-2xl flex-grow font-semibold">
              {" "}
              Number Of Guest
            </h2>
            <UserIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={numOfGuest}
              min={1}
              onChange={(e) => setNumOfGuest(e.target.value)}
            />
          </div>
          <div className="flex border-b-2 items-center p-3 justify-center">
            <button
              type="button"
              onClick={() => setsearch("")}
              className="text-gray-500  hover:text-gray-800  flex-grow"
            >
              Cancel
            </button>
            <Link
            onClick={()=>setsearch("")}
              href={{pathname:"/search",search:`?location=${search}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&guestCount=${numOfGuest}`}}
              type="button"
              className="text-center text-gray-500       hover:text-gray-800  flex-grow"
            >
              Search
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
