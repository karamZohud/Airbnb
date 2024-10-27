import { LiveData, LiveItem } from "../../types/app";
import { getLive } from "../../utils/api";
import { MainHeading } from "../MainHeading";
import { LiveCard } from "./LiveCard";

export const LiveAnymore = async () => {
  const getdata: LiveItem = await getLive();

  return (
    <section className="container pt-6">
      <MainHeading title={"Live Nearby"} />
      <div className="flex space-x-3 overflow-scroll noScrollbar p-3 -ml-3 ">
        {getdata.map((item, index) => (
          <LiveCard key={index} title={item.title} img={item.img} />
        ))}
      </div>
    </section>
  );
};
