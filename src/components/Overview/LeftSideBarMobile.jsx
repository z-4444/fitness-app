import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BsFillHouseDoorFill,
  BsFillCalendarWeekFill,
  BsList,
} from "react-icons/bs";
import { MdEnergySavingsLeaf, MdAccountCircle, MdLogout } from "react-icons/md";
import { GiPathDistance } from "react-icons/gi";

export default function LeftSidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className={`left_sidebar ${showSidebar ? "show" : ""}`}>
      <div className="hamburger" onClick={toggleSidebar}>
        <BsList className="hamburger_icon" />
      </div>
      <NavLink to={"/"}>
        <BsFillHouseDoorFill className="nav_icon" />
        Overview
      </NavLink>
      <NavLink to={"/energy"}>
        <MdEnergySavingsLeaf className="nav_icon" />
        Energy
      </NavLink>
      <NavLink to={"/calendar"}>
        <BsFillCalendarWeekFill className="nav_icon" />
        Calendar
      </NavLink>
      <NavLink to={"/distances"}>
        <GiPathDistance className="nav_icon" />
        Distances
      </NavLink>
      <NavLink to={"/profile"}>
        <MdAccountCircle className="nav_icon" />
        Profile
      </NavLink>
      <NavLink to={"/logout"}>
        <MdLogout className="nav_icon" />
        Logout
      </NavLink>
      <style>
        {`
          .left_sidebar {
            width: 240px;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background-color: #f5f5f5;
            padding: 20px;
            transition: transform 0.3s ease-in-out;
            transform: translateX(-100%);
            z-index: 999;
          }

          .left_sidebar.show {
            transform: translateX(0);
          }

          .nav_icon {
            margin-right: 8px;
          }

          .hamburger {
            position: absolute;
            top: 20px;
            right: 20px;
            cursor: pointer;
            display: none;
          }

          @media (max-width: 768px) {
            .left_sidebar {
              transform: translateX(0);
            }

            .hamburger {
              display: block;
            }
          }
        `}
      </style>
    </nav>
  );
}
