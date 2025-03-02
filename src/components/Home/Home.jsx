import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import RecentProducts from "./../RecentProducts/RecentProducts";
import MainSlider from "./../MainSlider/MainSlider";
import CategorySlider from "./../CategorySlider/CategorySlider";

export default function Home() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div className="overflow-hidden">
        <MainSlider />
        <CategorySlider />
        <RecentProducts />
      </div>
    </>
  );
}
