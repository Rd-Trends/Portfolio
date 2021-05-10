import React from "react";
import style from "./ImageWithOverlay.module.css";

const ImageWithOverlay = ({ image }) => {
  return (
    <div className={style.wrapper}>
      <img src={image} alt="hello" />
      <div className={style.overlay}></div>
    </div>
  );
};

export default ImageWithOverlay;
