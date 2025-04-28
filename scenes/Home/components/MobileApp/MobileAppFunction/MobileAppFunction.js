import React from "react";
import s from "./MobileAppFunction.module.scss";
import getImg from '../../../../../utils/getImg';

const MobileAppFunction = ({ data }) => {
  const { text, logo } = data;

  return (
    <div className={s.mobileAppFunction}>
      <img className={s.img} src={getImg(logo)} alt={text} />
      <span className={s.mobileAppFunctionText}>{text}</span>
    </div>
  );
};

export default MobileAppFunction;
