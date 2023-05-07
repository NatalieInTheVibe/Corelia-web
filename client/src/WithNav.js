import React, { useState } from "react";
import Navbar from "./components/pages/Navbar/Navbar";
import { Outlet } from 'react-router';

import Sidebar from "./components/pages/Sidebar/Sidebar";

export default () => {
    const [isopen, setisopen] = useState(false);
    const toggle = () => {
        setisopen(!isopen);
    };
  return (
    <>
    <Navbar toggle={toggle} />
    <Sidebar isopen={isopen} toggle={toggle} />
      <Outlet />
    </>
  );
};