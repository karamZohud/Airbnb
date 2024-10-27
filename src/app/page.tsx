import Image from "next/image";
import Banner from "./components/Banner";
import Explore from "./components/explore/Explore";
import { LiveAnymore } from "./components/LiveAnymore/LiveAnymore";
import GreatestOutdoors from "./components/GreatestOutdoors";
import { Headers } from "./components/header/Headers";

export default function Home() {
  return (
    <>
            <Headers/>
            <div className="">
      <Banner />
      <Explore />
      <LiveAnymore />
      <GreatestOutdoors title="The greatest House" description="the bigest house in the area " img="/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.webp"buttonText={"Buy"}/>
    </div>
    </>
    
  );
}
