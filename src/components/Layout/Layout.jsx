import React, { useEffect, useState } from "react";
import style from "./Layout.module.css";
import Navbar from "./../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./../Footer/Footer";

export default function Layout() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20">
        <Outlet className="py-20" />
      </div>
    </>
  );
}
