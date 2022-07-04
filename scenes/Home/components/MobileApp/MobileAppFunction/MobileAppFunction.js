import React from "react";
import s from "./MobileAppFunction.module.scss";
import getImg from '../../../../../utils/getImg';

const MobileAppFunction = ({ data }) => {
  const { mobileAppFunctionText, mobileAppFunctionLogo } = data;

  return (
    <div className={s.mobileAppFunction}>
      <img className={s.img} src={getImg(mobileAppFunctionLogo)} alt={mobileAppFunctionText} />
      <span className={s.mobileAppFunctionText}>{mobileAppFunctionText}</span>
    </div>
  );
};

export default MobileAppFunction;
