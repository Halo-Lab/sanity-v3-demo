import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import getImg from '../../utils/getImg'
import Social from "../Social/Social";

const Footer = ({ data }) => {
  const { footerLogo, footerText, footerHaloText, footerHaloLogo, footerItems } = data;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <Link href="/">
            <a>
              <img className="logo" src={getImg(footerLogo)} />
            </a>
          </Link>
          <Social footerSocialsArr={footerItems} />
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <span className={styles.copyrightText}>{footerText}</span>
            <a href="https://www.halo-lab.com/" className={styles.copyrightCompany}>
              <div className={styles.copyrightCompanyImg}>
                <img src={getImg(footerHaloLogo)} alt="Halo Lab icon" />
              </div>
              <span className={styles.copyrightCompanyName}>
                Made in&nbsp;
                <span className={styles.copyrightCompanyNameBold}>
                  {footerHaloText}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
