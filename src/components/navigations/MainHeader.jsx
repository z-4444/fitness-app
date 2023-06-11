import { Link } from "react-router-dom";

import MainHeader from "../../shared/components/Navigations/MainHeader";
import NavLinks from "../../shared/components/Navigations/NavLinks";
import "../../shared/components/Navigations/MainNavigation.css";
import SideDrawer from "../../shared/components/Navigations/SideDrawer";
import { useState } from "react";
import Backdrop from "../../shared/components/UIElements/Backdrop";

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    return setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    return setDrawerIsOpen(false);
  };
  return (
    <div>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Fitness</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </div>
  );
};

export default MainNavigation;
