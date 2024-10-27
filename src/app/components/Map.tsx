"use client";
import React, { useState } from "react";
import MapGL, { Marker, Popup } from "react-map-gl";
import { ListDataCard, ListingCard } from "../types/app";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/image";
const Map = ({ searchResultsData }: { searchResultsData: ListDataCard }) => {
  const [selectedLocation, setselectedLocation] = useState<ListingCard | null>(null);
  const coordinates = searchResultsData.map((lising) => ({
    longitude: lising.long,
    latitude: lising.lat,
  }));
  const center = getCenter(coordinates) as {
    longitude: number;
    latitude: number;
  };
  const [viewPort, setviewPort] = useState({
    width: "100%",
    height: "100%",
    zoom: 11,
    latitude: center.latitude,
    longitude: center.longitude,
  });
  return (
    <MapGL
      {...viewPort}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
      mapStyle={"mapbox://styles/mapbox/streets-v12"}
      onMove={(nextViewPort) =>
        setviewPort((prev) => {
          return {
            ...prev,
            longitude: nextViewPort.viewState.longitude,
            latitude: nextViewPort.viewState.latitude,
          };
        })
      }
    >
      {searchResultsData.map((ele) => (
        <div key={ele.long}>
          <Marker longitude={ele.long} latitude={ele.lat}>
            <div
              onClick={() => setselectedLocation(ele)}
              className="animate-bounce"
            >
              <Image className="bg-transparent" src={"/mark.png"} width={30} height={30} alt={ele.title} />
            </div>
          </Marker>
          {selectedLocation?.long === ele.long ? (
            <Popup closeOnClick={false} 
            onClose={()=>setselectedLocation(null)}
            longitude={ele.long}
            latitude={ele.lat}
             
            >
                {ele.title}
            </Popup>
          ) : null}
        </div>
      ))}
    </MapGL>
  );
};

export default Map;
