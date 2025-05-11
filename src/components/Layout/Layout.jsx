import React from "react";
import Header from "../header/header.jsx";
import Footer from "../footer/Footer.jsx";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto p-4 flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
