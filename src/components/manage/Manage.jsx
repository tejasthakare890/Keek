
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";
import '../manage/Manage.scss'

const Manage = () => {
  return (
    <div>
      <h2>Manage Component</h2>
      <p>Welcome to the Manage Campaigns page!</p>
    
      <Outlet/>
    </div>
  );
};

export default Manage;
