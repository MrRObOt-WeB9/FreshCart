import React, { useEffect, useState } from "react";
import style from "./NotFound.module.css";
import errImg from "../../assets/images/error.svg";
export default function NotFound() {
  return (
    <>
      <div className="mx-auto w-3/4">
        <img src={errImg} className="w-11/12" alt="" />
      </div>
    </>
  );
}
