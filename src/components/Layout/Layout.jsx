import React from "react";
import Header from "../header/header.jsx";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
}

export default Layout;
