import React from "react";

type TeamList = {
  url: string;
  name: string;
  role: string;
  email: string;
};

export const TeamListView = () => {
  const teamLists: TeamList[] = [
    {
      email: "janick_parisian@yahoo.com",
      name: "Jason Price",
      role: "Admin",
      url: "../../../profiles/1.jpg",
    },
    {
      email: "sibyl_kozey@gmail.com",
      name: "Jukkoe Sisao",
      role: "CEO",
      url: "../../../profiles/2.jpg",
    },
    {
      email: "nadia_block@hotmail.com",
      name: "Harriet King",
      role: "CTO",
      url: "../../../profiles/3.jpg",
    },
    {
      email: "feil.wallace@kunde.us",
      name: "Lenora Benson",
      role: "Lead",
      url: "../../../profiles/4.jpg",
    },
    {
      email: "kemmer.hattie@cremin.us",
      name: "Olivia Reese",
      role: "Strategist",
      url: "../../../profiles/5.jpg",
    },
    {
      email: "loraine.koelpin@tromp.io",
      name: "Bertha Valdez",
      role: "CEO",
      url: "../../../profiles/6.jpg",
    },
    {
      email: "delmer.kling@gmail.com",
      name: "Harriett Payne",
      role: "CEO",
      url: "../../../profiles/7.jpg",
    },
    {
      email: "nannie_west@estrella.tv",
      name: "George Bryant",
      role: "Social Media",
      url: "../../../profiles/8.jpg",
    },
    {
      email: "lucienne.herman@hotmail.com",
      name: "Lily French",
      role: "Strategist",
      url: "../../../profiles/9.jpg",
    },
    {
      email: "wiegand.leonor@herman.us",
      name: "Howard Adkins",
      role: "CEO",
      url: "../../../profiles/10.jpg",
    },
    {
      email: "waino_altenwerth@nicolette.tv",
      name: "Earl Bowman",
      role: "Social Media",
      url: "../../../profiles/11.jpg",
    },
    {
      email: "octavia.nienow@gleichner.net",
      name: "Patrick Padilla",
      role: "Social Media",
      url: "../../../profiles/12.jpg",
    },
    {
      email: "nannie_west@estrella.tv",
      name: "George Bryant",
      role: "Social Media",
      url: "../../../profiles/13.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ml-6 mt-5">
      {teamLists.map((item, index) => (
        <div key={index} className="bg-white p-8 rounded-2xl shadow-md">
          <img
            src={item.url}
            alt={item.name}
            className="rounded-full w-28 h-28 mx-auto"
          />
          <div className="text-center mt-6">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600 my-2">{item.role}</p>
            <a
              href={`mailto:${item.email}`}
              className="text-gray-500 text-sm mx-2 block truncate"
              title={item.email}
            >
              {item.email}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
