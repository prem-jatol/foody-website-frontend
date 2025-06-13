import React from "react";
import Header from "./Component/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer";
import { useEffect } from "react";
import { useState } from "react";

const Layout = () => {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const existUser = localStorage.getItem("userToken");
    if (existUser) {
      setUser(true);
    }
  }, []);
  return (
    <>
      <Header user={user} />
      <main className="w-[900px] border mx-auto min-h-[600px] h-fit">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
