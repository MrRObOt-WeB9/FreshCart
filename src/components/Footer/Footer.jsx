import React, { useEffect, useState } from "react";
import style from "./Footer.module.css";

export default function Footer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <h1 className="bg-main">Footer</h1>
    </>
  );
}
