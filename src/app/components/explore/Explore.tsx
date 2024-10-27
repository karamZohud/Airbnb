import { ExploreItem } from "../../types/app";
import { getExplore } from "../../utils/api";
import ExploreCard from "./ExploreCard";
import { MainHeading } from "../MainHeading";

export default async function Explore() {
  const getdata: ExploreItem = await getExplore();

  return (
    <section className="container pt-6">
      <MainHeading title={"Explore Nearby"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {getdata.map((item, index) => (
          <ExploreCard
            key={index}
            img={item.img}
            location={item.location}
            distance={item.distance}
          />
        ))}
      </div>
    </section>
  );
}
