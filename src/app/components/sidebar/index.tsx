"use client";
import React, { useState } from "react";
import Nav from "./nav";
import NavMobile from "./navmobile";

const Sidebar = () => {
    // Toggle sidebar
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
      <NavMobile isOpen={isOpen} toggle={toggle} />
      <Nav toggle={toggle} />
    </>
  );
}

export default Sidebar;