import React, { useState } from "react";
import LeftSidebar from "../components/Overview/LeftSidebar";
import "../styles/_calendar.scss";
import { FaMapMarkerAlt, FaFire, FaBed, FaRunning } from "react-icons/fa";

import fitnessActivityData from "../json/fitnessActivityData";
import MainNavigation from "../components/navigations/MainHeader";

const Calendar = () => {
  const fieldIcons = {
    distance: <FaMapMarkerAlt />,
    caloriesBurned: <FaFire />,
    sleep: <FaBed />,
    workoutTime: <FaRunning />,
  };
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div
      className="main_wrapper"
      style={{ width: "80%", margin: "0 auto", marginTop: "40px" }}
    >
      <MainNavigation />
      {/* <div className="left_sidebar">
        <LeftSidebar />
      </div> */}
      <div className="right_container">
        <div className="stress_container white_text">
          <h3 className="main_heading">
            {localStorage.getItem("name")} Workout Statistics
          </h3>
          <p style={{ fontSize: "20px" }} className="banner-paragraph">
            Keep a record of your workouts, noting your achievements and
            progress. Seeing improvements over time, such as increased weights,
            faster times, or longer distances, can be highly motivating and help
            you stay on track. Remember, motivation can fluctuate, so it's
            essential to find what works best for you and adapt your strategies
            as needed. Stay positive, embrace the process, and enjoy the journey
            towards a healthier and fitter you!
          </p>
        </div>
        {weekdays.map((day) => (
          <div key={day} style={{ marginTop: "20px" }}>
            <span className="day_text">{day}</span>

            <div className="card">
              <div>{fieldIcons.distance}</div>
              <div>
                Distance: <b>{fitnessActivityData[day]?.distance} km</b>
              </div>
              <div>
                <div>{fieldIcons.caloriesBurned}</div>
                Calories Burned:
                <b>{fitnessActivityData[day]?.caloriesBurned} cal</b>
              </div>
              <div>{fieldIcons.sleep}</div>
              <div>
                Sleep: <b>{fitnessActivityData[day]?.sleep} hours</b>
              </div>
              <div>
                <div>{fieldIcons.workoutTime}</div>
                Workout Time:
                <b>{fitnessActivityData[day]?.workoutTime} minutes</b>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
