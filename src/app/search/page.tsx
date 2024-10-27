import React from "react";
import { Headers } from "../components/header/Headers";
import { format } from "date-fns";
import { MainHeading } from "../components/MainHeading";
import { getSearchData } from "../utils/api";
import { ListDataCard } from "../types/app";
import ListingCard from "../components/ListingCard";
import Map from "../components/Map";

type searchProps = {
  startDate: string;
  endDate: string;
  guestCount: string;
  location: string;
};

const SearchResults = async ({
  searchParams: { location, startDate, endDate, guestCount },
}: {
  searchParams: searchProps;
}) => {
  let formatedStartDate;
  let formatedEndDate;

  if (startDate && endDate) {
    formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  }
  const range = `${formatedStartDate}-${formatedEndDate}`;
  const filter = [
    "Cancellation Flexibility",
    "Type of place",
    "Price",
    "Rooms and Beds",
    "More filters",
  ];

  const searchResultsData: ListDataCard = await getSearchData();

  return (
    <>
      <Headers placeholder={`${location} | ${range} | ${guestCount} guests`} />
      <div>
        <main>
          <section className="pt-10">
            <div className="container">
              <p className="text-xs text-gray-500">
                300+ -{range} - for {guestCount} guests{" "}
              </p>
              <MainHeading title={`Stays in ${location}`} />
              <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 ">
                {filter.map((ele) => (
                  <button type="button" className="filter-btn">
                    {ele}
                  </button>
                ))}
              </div>
              <div className="flex justify-between">
              <div className="pr-4">
                {searchResultsData.map((ele, index) => (
                  <ListingCard
                    key={index}
                    title={ele.title}
                    img={ele.img}
                    location={ele.location}
                    description={ele.description}
                    star={ele.star}
                    lat={ele.lat}
                    price={ele.price}
                    total={ele.total}
                    long={ele.long}
                  />
                ))}
              </div>
              <div className="hidden xl:inline-flex xl:min-w-[600px]">
                <Map searchResultsData={searchResultsData}/>
              </div>
              </div>
             
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
export default SearchResults;
