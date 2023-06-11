import BarChart from "../components/distance/BarChart";
import "../styles/_distance.scss";

import LeftSidebar from "../components/Overview/LeftSidebar";
import MainNavigation from "../components/navigations/MainHeader";

const Distance = () => {
  return (
    <div className="main_wrapper" style={{ marginTop: "40px" }}>
      {/* <div className="left_sidebar"> */}
      {/* <LeftSidebar /> */}
      <MainNavigation />
      {/* </div> */}
      <div className="bar_chart">
        <BarChart />
      </div>
    </div>
  );
};

export default Distance;
