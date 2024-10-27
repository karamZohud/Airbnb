import React from "react";

const Footer = () => {
  const links = [
    {
      title: "ABOUT",
      links: [
        "How Airbnb works",
        "Newsroom",
        "Investors",
        "Airbnbn Plus",
        "Airbnb Luxe",
      ],
    },
    {
      title: "COMMUNITY",
      links: [
        "Accessbility",
        "This is not a real site",
        "Its a pretty awesome clone",
        "Referrals accepted",
        "Papafam",
      ],
    },
    {
      title: "HOST",
      links: [
        "Accessbility",
        "This is not a real site",
        "Its a pretty awesome clone",
        "Referrals accepted",
        "Papafam",
      ],
    },
    {
      title: "SUPPORT",
      links: [
        "Accessbility",
        "This is not a real site",
        "Its a pretty awesome clone",
        "Referrals accepted",
        "Papafam",
      ],
    },
  ];
  return (
    <footer className=" grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 gap-y-10 px-32 py-14 bg-gray-200">
      {links.map((item, index) => (
        <div key={index} className="flex flex-col gap-1">
          <h1 className="text-lg">{item.title}</h1>
          <div className="flex flex-col gap-y-1 ">
            {item.links.map((linkItem, index) => (
              <p key={index} className="text-gray-700">
                {linkItem}{" "}
              </p>
            ))}
          </div>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
