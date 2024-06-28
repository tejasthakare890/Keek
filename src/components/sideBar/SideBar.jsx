import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";

const Item = ({ title, to, selected, setSelected }) => {
  console.log("to ", to);
  return (
    <Link
      to={to}
      className={selected === title ? "menu-items-active" : "menu-items"}
      onClick={() => setSelected(title)}
    >
      <p>{title}</p>
    </Link>
  );
};

const SideBar = () => {
  const [selected, setSelected] = useState("Home");

  console.log(selected);

  const menuItems = [
    { id: 1, title: "Home", to:"/" },
    { id: 2, title: "Manage Campaigns", to:"/managecampaigns" },
    { id: 3, title: "Report Generation", to:"/reportgeneration" },
    { id: 4, title: "Saved Lists", to:"/savedlists" },
    { id: 5, title: "Find Influencers", to:"/findinfluencers" },
    { id: 6, title: "Influencers Base", to:"/influencersbase" },
  ];
  const accountTitles = [
    { id: 1, title: "Hire Influencers", to:"/hireinfluencers" },
    { id: 2, title: "Settings", to:"/settings" },
    { id: 3, title: "Live Support", to:"/livesupport" },
  ];

  return (
    <div className="sidebar">
      <h1>Keek</h1>
      <div className="menuWrapper">
      {menuItems.map((items) => (
          <Item
          key={items.id}
            selected={selected}
            setSelected={setSelected}
            title={items.title}
            to={items.to}
          />
        ))}
        <h4>Accounts</h4>

        {accountTitles.map((items) => (
          <Item
          key={items.id}
            selected={selected}
            setSelected={setSelected}
            title={items.title}
            to={items.to}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
