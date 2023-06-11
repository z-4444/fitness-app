import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setToken }) => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    setToken("");
    navigate("/");
  }, []);

  return;
};

export default Logout;
