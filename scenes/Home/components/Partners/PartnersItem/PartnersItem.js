import React from "react";
import s from "./PartnersItem.module.scss";
import getImg from '../../../../../utils/getImg'

const PartnersItem = ({ data }) => {
  const { partnersImage, partnersName } = data;

  return (
    <div className={s.partnersItem}>
      <img className={s.img} src={getImg(partnersImage)} alt={partnersName} />
    </div>
  );
};

export default PartnersItem;
