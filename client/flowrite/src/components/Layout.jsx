import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <main className="p-10 max-container mx-auto font-montserrat">
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
