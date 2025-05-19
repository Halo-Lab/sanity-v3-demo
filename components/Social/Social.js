import React from "react";
import styles from "./Social.module.scss";
import getImg from '../../utils/getImg'

const Social = ({ footerSocialsArr }) => {
  const socialLinks = footerSocialsArr.map((item, index) => {
    const { icon, name, url } = item;

    return (
      <li className={styles.socialItem} key={index}>
        <a href={url}>
          <img
            className={styles.socialIcon}
            loading="lazy"
            src={getImg(icon)}
            alt={name}
          />
        </a>
      </li>
    );
  });

  return <ul className={styles.social}>{socialLinks}</ul>;
};
export default Social;
