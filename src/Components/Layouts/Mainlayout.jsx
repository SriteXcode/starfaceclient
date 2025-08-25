import React from "react";
import Navbar from "../Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>
        {children}
      </div>
    </>
  );
};

export default MainLayout;
